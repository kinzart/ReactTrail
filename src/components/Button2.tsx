import { useState } from "react";

export function Button2() {
    const [counter, setCounter] = useState(0);
    // [var, adjustor da var] recebe estado 0

    function increment() {
        setCounter(counter + 1); //ajustar valor da var baseado no var inicial
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}