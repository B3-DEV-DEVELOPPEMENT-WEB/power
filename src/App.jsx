import Number from "./components/Number.jsx";
import Students from "./components/Students.jsx";
import DemoHook from "./components/DemoHook.jsx";
import CLock from "./components/Clock.jsx";
import Slider from "./components/Slider.jsx";
import DemoEvent from "./components/demoEvent.jsx";
import './App.css'

function App() {
    let table = [1, 2, 3, 4, 5]
    let puissanceValue = 3

    return (
        <>
            <DemoEvent />
            <hr/>
            <CLock />
            <hr/>
            <DemoHook />
            <hr/>
            <Slider />
            <hr/>
            {
                table.map(
                    (element, i) =>
                        <Number
                            key={i}
                            number={table[i]}
                            puissance={puissanceValue}
                        />
                )
            }
            <hr/>
            <Students />
        </>
    )
}

export default App
