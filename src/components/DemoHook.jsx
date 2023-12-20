import {useState} from "react";

const DemoHook = () => {
    const [city, setcity] = useState('Paris')

    setTimeout(() => {
        setcity('Coutiches')
    }, 2000)

    return (
        <>
            <h2>{city}</h2>
        </>
    )
}
export default DemoHook