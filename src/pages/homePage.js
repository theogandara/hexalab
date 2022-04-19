import InputComponent from "../components/Input"
import DisplayComponent from "../components/DisplayComponent"

const HomePage = () => {
    return (
        <div>
            <InputComponent Label={"Valor total da gorgeta"} />
            <DisplayComponent totalValue={100}/>
        </div>
    )
}

export default HomePage