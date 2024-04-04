import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import UIButton from "../ui/UIButton"
import clsx from "clsx"

const Login = () => {

    const navigate = useNavigate()

    const loginClick = useCallback(() => {
        // Context logic
        navigate('/')
    })

    return (
        <div>
            Login
            <UIButton
                className={clsx(
                    'w-40'
                )}
                onClick={loginClick}
            >
                Log in
            </UIButton>
        </div>
    )
}

export default Login