import InputComponent from "../../components/Input"
import DisplayComponent from "../../components/DisplayComponent"
import Button from "../../components/Button"
import { useState } from "react"
import { Display, Titles, TitlesForm, Main, ButtonCase, Header, Results, PageContent } from "./styles"

const HomePage = () => {
    const [valorTotal, setValorTotal] = useState("")
    const [gorgetaPerCent, setGorgetaPerCent] = useState("")
    const [quantityPeople, setQuantityPeople] = useState(1)
    const totalGorgeta = (valorTotal / 100) * gorgetaPerCent
    const indvidual = totalGorgeta / quantityPeople


    return (
        <PageContent>
            <Header>Teste Front-End - Hexalab</Header>
            <Display>
                <Results>
                    <Titles>Valor total da gorjeta</Titles>
                    <DisplayComponent showValue={totalGorgeta} />
                    <Titles>Valor que cada pessoa irá pagar de gorjeta</Titles>
                    <DisplayComponent showValue={indvidual} />
                </Results>
                <Main>
                    <TitlesForm>Digite o valor total do pedido</TitlesForm>
                    <InputComponent icon={"R$"} type={"number"} onChange={(e) => setValorTotal(e.target.value)} placeholder={"Digite o valor aqui"} />
                    <TitlesForm>Quanto quer dar de gorgeta ?*</TitlesForm>
                    <ButtonCase>
                        <Button onClick={() => setGorgetaPerCent(5)} text={"5%"} />
                        <Button onClick={() => setGorgetaPerCent(10)} text={"10%"} />
                        <Button onClick={() => setGorgetaPerCent(15)} text={"15%"} />
                        <Button onClick={() => setGorgetaPerCent(25)} text={"25%"} />
                    </ButtonCase>
                    <InputComponent icon={"%"} value={gorgetaPerCent} type={"number"} onChange={(e) => setGorgetaPerCent(e.target.value)} placeholder={"Personalize aqui"} />
                    <TitlesForm>Quantas pessoas irão pagar ?*</TitlesForm>
                    <InputComponent icon={"@"} type={"number"} onChange={(e) => setQuantityPeople(e.target.value)} placeholder={"Digite o valor aqui"} />
                </Main>
            </Display>
        </PageContent>
    )
}

export default HomePage