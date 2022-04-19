import { InputBase, Input, Span } from "./style"

const InputComponent = ({ placeholder, onChange, type, value, icon }) => {
    return (
        <InputBase>
            <Span>{icon}</Span>
            <Input value={value} type={type} placeholder={placeholder} onChange={onChange}/>
        </InputBase>
    )
}

export default InputComponent