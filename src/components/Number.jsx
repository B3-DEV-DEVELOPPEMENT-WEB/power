const Number = ({number, puissance}) => {
    return (
        <li>Number : {number}<sup>{puissance}</sup> est égal a {Math.pow(number, puissance)}</li>
    )
}
export default Number