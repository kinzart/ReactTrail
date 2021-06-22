import { useState } from "react";

type Button1Props = {
    text?: string;//? = opcional, tem ou nao tem
    txtId: number;
}

const talNome = window.prompt('Digite seu nome')
export function Button1(props: Button1Props) {

    const [counter, setCounter] = useState(0);
    // [var, adjustor da var] recebe estado 0
    function increment() {
        setCounter(counter - 1); //ajustar valor da var baseado no var inicial
        console.log(counter);
    }
    return (


        <div>
            <button onClick={increment}>{props.text || props.txtId}{counter}</button>
            <h2>Aperte o botão acima {talNome}</h2>
        </div>
    )
}