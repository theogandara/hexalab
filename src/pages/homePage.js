import InputComponent from "../components/Input"
import DisplayComponent from "../components/DisplayComponent"
import Button from "../components/Button"

const HomePage = () => {
    return (
        <div>
            <InputComponent Label={"Valor total da gorgeta"} />
            <DisplayComponent totalValue={100}/>
            <Button/>
        </div>
    )
}

export default HomePage