import InputComponent from "../components/Input"
import DisplayComponent from "../components/DisplayComponent"
import Button from "../components/Button"
import { useState } from "react"

const HomePage = () => {

    const [valorTotal, setValorTotal] = useState(0)
    const [gorgetaPerCent, setGorgetaPerCent] = useState(0)
    const [quantityPeople, setQuantityPeople] = useState(1)


    const totalGorgeta = (valorTotal / 100) * gorgetaPerCent

    const indvidual = totalGorgeta / quantityPeople


    return (
        <div>
            Valor total da gorjeta
            <DisplayComponent showValue={totalGorgeta} />
            Valor que cada pessoa irá pagar de gorjeta
            <DisplayComponent showValue={indvidual} />
            Digite o valor total do pedido
            <InputComponent type={"number"} onChange={(e) => setValorTotal(e.target.value)} placeholder={"Digite o valor aqui"} />
            Quanto quer dar de gorgeta ?*
            <div>
                <Button onClick={() => setGorgetaPerCent(5)} text={"5%"} />
                <Button onClick={() => setGorgetaPerCent(10)} text={"10%"} />
                <Button onClick={() => setGorgetaPerCent(15)} text={"15%"} />
                <Button onClick={() => setGorgetaPerCent(25)} text={"25%"} />
            </div>
            <InputComponent type={"number"} onChange={(e) => setGorgetaPerCent(e.target.value)} placeholder={"Personalize aqui"} />
            Quantas pessoas irão pagar ?*
            <InputComponent type={"number"} onChange={(e) => setQuantityPeople(e.target.value)} placeholder={"Digite o valor aqui"} />
        </div>
    )
}

export default HomePage