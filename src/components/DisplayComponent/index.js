import { DisplayBase, Span, Title } from "./style"

const DisplayComponent = ({ totalValue }) => {
    return (
        <DisplayBase>
            <Title>R$</Title>
            <Span>{totalValue}</Span>
        </DisplayBase>
    )
}

export default DisplayComponent