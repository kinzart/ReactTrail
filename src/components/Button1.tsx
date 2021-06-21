type Button1Props = {
    text?: string;//? = opcional, tem ou nao tem
    txtId: number;
}


export function Button1(props: Button1Props) {
    const talNome = window.prompt('Digite seu nome')
    return (
        <div>
            <button>{props.text || props.txtId}</button>
            <h2>Aperte o botão acima {talNome}</h2>
        </div>
    )
}