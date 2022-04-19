import { InputBase, Input, Span } from "./style"

const InputComponent = ({ placeholder, onChange, type }) => {
    return (
        <InputBase>
            <Span>R$</Span>
            <Input type={type} placeholder={placeholder} onChange={onChange}/>
        </InputBase>
    )
}

export default InputComponent