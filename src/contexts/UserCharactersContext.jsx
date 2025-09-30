// src/contexts/UserCharactersContext.jsx
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    useCallback,
} from 'react'
import { useMarvel, httpMethod } from '@hooks/useMarvel'
import { useUser } from './UserContext'

const UserCharactersContext = createContext(null)

/**
 * Backend shape (summary)
 * {
 *   _id, userId, characterId, formId,
 *   level, totalSP, spentSP,
 *   maxHP, maxPP, currentHP, currentPP,
 *   skillLevels: [{ key, value }],
 *   unlockedPowers: [{ powerId, level }],
 *   notes,
 *   createdAt, updatedAt
 * }
 */

export function UserCharactersProvider({ children }) {
    const { query, loading: apiLoading } = useMarvel()
    const { isLoggedIn } = useUser()

    const [list, setList] = useState([])
    const [byId, setById] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    // ---------- helpers ----------
    const mergeOne = useCallback((doc) => {
        if (!doc || !doc._id) return
        setById((prev) => ({ ...prev, [doc._id]: doc }))
        setList((prev) => {
            const idx = prev.findIndex((x) => x._id === doc._id)
            if (idx === -1) return [doc, ...prev]
            const copy = prev.slice()
            copy[idx] = doc
            return copy
        })
    }, [])

    const replaceAll = useCallback((arr) => {
        const map = {}
            ; (arr || []).forEach((x) => (map[x._id] = x))
        setById(map)
        setList(arr || [])
    }, [])

    // ---------- load mine on login ----------
    useEffect(() => {
        if (!isLoggedIn) {
            replaceAll([])
            return
        }
        (async () => {
            try {
                setLoading(true)
                setError(null)
                const res = await query('/user-character') // GET
                replaceAll(res || [])
            } catch (e) {
                // eslint-disable-next-line no-console
                console.error('Failed to load user-character list', e)
                setError(e)
            } finally {
                setLoading(false)
            }
        })()
    }, [isLoggedIn, query, replaceAll])

    // ---------- public API ----------
    const get = useCallback(
        async (id) => {
            if (byId[id]) return byId[id]
            const doc = await query(`/user-character/${id}`) // GET
            mergeOne(doc)
            return doc
        },
        [byId, query, mergeOne]
    )

    // CREATE: only needs characterId (backend resolves defaultForm)
    const create = useCallback(
        async ({ characterId }) => {
            const doc = await query('/user-character', {
                method: httpMethod.POST,
                body: { characterId }, // <- only characterId
            })
            mergeOne(doc)
            return doc
        },
        [query, mergeOne]
    )

    const levelUp = useCallback(
        async (id) => {
            const doc = await query(`/user-character/${id}/level-up`, {
                method: httpMethod.POST,
            })
            mergeOne(doc)
            return doc
        },
        [query, mergeOne]
    )

    const longRest = useCallback(
        async (id) => {
            const doc = await query(`/user-character/${id}/long-rest`, {
                method: httpMethod.POST,
            })
            mergeOne(doc)
            return doc
        },
        [query, mergeOne]
    )

    const shortRest = useCallback(
        async (id) => {
            const doc = await query(`/user-character/${id}/short-rest`, {
                method: httpMethod.POST,
            })
            mergeOne(doc)
            return doc
        },
        [query, mergeOne]
    )

    const patch = useCallback(
        async (id, partial) => {
            const doc = await query(`/user-character/${id}`, {
                method: httpMethod.PATCH,
                body: partial, // { currentHP?, currentPP?, notes? }
            })
            mergeOne(doc)
            return doc
        },
        [query, mergeOne]
    )

    // Spend PP when using a power
    const usePower = useCallback(
        async (id, { powerId, levelCost }) => {
            const res = await query(`/user-character/${id}/use-power`, {
                method: httpMethod.POST,
                body: { powerId, levelCost }, // 0..5
            })

            // If controller returns only { currentPP }
            if (res && res.currentPP != null) {
                const prev = byId[id]
                if (prev) mergeOne({ ...prev, currentPP: res.currentPP })
                return { currentPP: res.currentPP }
            }
            // If controller returns full doc
            if (res && res._id) mergeOne(res)
            return res
        },
        [query, mergeOne, byId]
    )

    // Unlock power (SP spend)
    const spendSP_unlockPower = useCallback(
        async (id, { powerId, powerLevel }) => {
            const doc = await query(`/user-character/${id}/spend-sp`, {
                method: httpMethod.POST,
                body: { type: 'unlock-power', powerId, powerLevel }, // 0..5
            })
            mergeOne(doc)
            return doc
        },
        [query, mergeOne]
    )

    // Upgrade skill (SP spend)
    const spendSP_skillUp = useCallback(
        async (id, { skillKey, toLevel }) => {
            const doc = await query(`/user-character/${id}/spend-sp`, {
                method: httpMethod.POST,
                body: { type: 'skill-up', skillKey, toLevel }, // 1..8
            })
            mergeOne(doc)
            return doc
        },
        [query, mergeOne]
    )

    const value = useMemo(
        () => ({
            list,
            byId,
            loading: loading || apiLoading,
            error,
            get,
            create,
            levelUp,
            longRest,
            shortRest,
            patch,
            usePower,
            spendSP_unlockPower,
            spendSP_skillUp,
        }),
        [
            list,
            byId,
            loading,
            apiLoading,
            error,
            get,
            create,
            levelUp,
            longRest,
            shortRest,
            patch,
            usePower,
            spendSP_unlockPower,
            spendSP_skillUp,
        ]
    )

    return (
        <UserCharactersContext.Provider value={value}>
            {children}
        </UserCharactersContext.Provider>
    )
}

export const useUserCharacters = () => {
    const ctx = useContext(UserCharactersContext)
    if (!ctx) {
        throw new Error('useUserCharacters must be used within a UserCharactersProvider')
    }
    return ctx
}
