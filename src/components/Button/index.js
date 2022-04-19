import { ButtonBase } from "./style"

const Button = ({ text, onClick }) => {
    return (
        <ButtonBase onClick={onClick} >{text}</ButtonBase>
    )
}

export default Button