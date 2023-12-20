import {useState} from "react";

const CLock = () => {
    function now(){
        return new Date().toLocaleTimeString('fr-FR')
    }
    const [time, setTime] = useState(now())

    setTimeout(() => {
        setTime(now())
    }, 1000)

    return (
        <>
            <h2>{time}</h2>
        </>
    )
}
export default CLock