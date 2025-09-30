import { useNavigate } from 'react-router-dom'
import { useUserCharacters } from '../../contexts/UserCharactersContext'
import { useForms } from '../../contexts/FormsContext'
import { useCharacters } from '../../contexts/CharactersContext'

export default function MyCharacters() {
    const nav = useNavigate()
    const { list, loading } = useUserCharacters()
    const { formsById } = useForms()
    const { charactersById } = useCharacters()

    if (loading) return <div>Loading…</div>
    if (!list.length) return <div>You have no character sheets yet.</div>

    return (
        <div className="grid md:grid-cols-2 gap-4 p-4">
            {list.map(s => {
                const form = formsById?.[s.formId]
                const ch = charactersById?.[s.characterId]
                return (
                    <div key={s._id} className="rounded-xl shadow p-4 bg-white/80">
                        <div className="flex items-center gap-3">
                            {form?.image && <img src={form.image} alt="" width={64} height={64} style={{ borderRadius: 12 }} />}
                            <div>
                                <div className="font-bold text-lg">{ch?.name || 'Character'}</div>
                                <div className="text-sm">Level {s.level} • HP {s.currentHP}/{s.maxHP} • PP {s.currentPP}/{s.maxPP}</div>
                            </div>
                        </div>
                        <div className="mt-3 flex gap-2">
                            <button className="btn-primary" onClick={() => nav(`/my-characters/${s._id}`)}>Open</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
