import { InputBase, Input, Span } from "./style"

const InputComponent = ({ placeholder, register, name }) => {
    return (
        <InputBase>
            <Span>R$</Span>
            <Input register={register} name={name} placeholder={placeholder} />
        </InputBase>
    )
}

export default InputComponent