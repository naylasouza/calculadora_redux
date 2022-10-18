import React, { useState} from "react";
import './style.css';

const Card = () => {
    const [calc, setCalc] = useState(0)
 
    const somador = () => {
        setCalc(parseFloat(calc) + parseFloat(calc))
    }
    

    return(
        <div className="container-card">
            <h1>Valor atual: {calc}</h1>
            <input type="number" Placeholder="Digite o número" onChange={(e)=> setCalc(e.target.value)}></input>
            <button onClick={somador}>OK</button>
            </div>
    )
}
export default Card