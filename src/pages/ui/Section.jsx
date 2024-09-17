import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Statebar 16 twu = 4rem = 64px
const fixedIntersectionHeight = 64

const Section = (props) => {

    const { name, ...otherProps } = props

    const ref = useRef(null)
    const [tracking, setTracking] = useState(undefined)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [navigateTo, setNavigateTo] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    const nameHash = useMemo(() => `#${name}`, [name])

    const checkIntersection = useCallback(() => {
        if (!ref.current) {
            setIsIntersecting(false)
            return
        }
        let refTop = ref.current.offsetTop - window.scrollY
        let refBottom = ref.current.offsetHeight + refTop
        let intersects
        if (refBottom < 0) {
            intersects = false
        } else {
            intersects = fixedIntersectionHeight >= refTop &&
                fixedIntersectionHeight <= refBottom
        }
        setIsIntersecting((intersected) => {
            const clearPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname
            if (!intersected && intersects) {
                setNavigateTo(`${clearPath}${nameHash}`)
            } else if (intersected && !intersects) {
                setNavigateTo(`${clearPath}`)
            }
            return intersects
        })
    }, [ref, location, nameHash, setNavigateTo, setIsIntersecting])

    useEffect(() => {
        checkIntersection()
        setTracking(undefined)
        window.addEventListener('scroll', checkIntersection)
        return () => window.removeEventListener('scroll', checkIntersection)
    }, [setTracking])

    useEffect(() => {
        if (navigateTo) {
            navigate(navigateTo)
        }
    }, [navigateTo, setNavigateTo, navigate])

    useEffect(() => {
        if (tracking === undefined) {
            if (location.hash === nameHash) {
                document.body.style.overflow = 'hidden'
                setTracking(true)
            } else {
                setTracking(false)
            }
        }
    }, [tracking, location, nameHash, setTracking, checkIntersection])

    useEffect(() => {
        if (!tracking) return
        if (!ref.current) return
        const intervalId = setInterval(() => {
            const element = ref.current
            if (!isIntersecting) {
                window.scrollTo({
                    top: element.offsetTop - fixedIntersectionHeight,
                    behavior: 'smooth'
                })
            } else {
                document.body.style.overflow = ''
                setTracking(false)
            }
        }, [500])
        return () => clearInterval(intervalId)
    }, [tracking, isIntersecting])

    return (
        <section
            id={name}
            ref={ref}
            {...otherProps}
        />
    )
}

export default Section