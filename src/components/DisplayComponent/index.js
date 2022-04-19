import { DisplayBase, Span, Title } from "./style"

const DisplayComponent = ({ showValue }) => {
    return (
        <DisplayBase>
            <Title>R$</Title>
            <Span>{showValue}</Span>
        </DisplayBase>
    )
}

export default DisplayComponent