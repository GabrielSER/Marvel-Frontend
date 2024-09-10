import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const fixedIntersectionHeight = 300

const Section = (props) => {

    const { name, ...otherProps } = props

    const ref = useRef(null)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const nameHash = useMemo(() => `#${name}`, [name])

    useEffect(() => {
        if (!isIntersecting && location.hash === nameHash) {
            const element = ref.current
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [isIntersecting, location, nameHash])

    const handleScroll = useCallback(() => {
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
            intersects = fixedIntersectionHeight >= refTop && fixedIntersectionHeight <= refBottom
        }
        setIsIntersecting((intersected) => {
            if (!intersected && intersects) {
                navigate(`${location.pathname}${nameHash}`)
            } else if (intersected && !intersects) {
                navigate(`${location.pathname}`)
            }
            return intersects
        })
    }, [ref, location, nameHash, navigate, setIsIntersecting])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return <section id={name} ref={ref} {...otherProps} />

}

export default Section