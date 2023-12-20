const DemoEvent = () => {
    const DisplayEvent = () => {
        alert('tu as cliqué héhé !!')
    }

    const DisplayGoogle = (e) => {
        //stopper le comportement par défaut d'un élément
        e.preventDefault()
    }

    return (
        <>
            <button onClick={DisplayEvent}>Clique sur moi !!!</button>
            <button onClick={() => alert('tu as cliqué sur moi 2 !!')}>Clique sur moi 2 !!!</button>
            <a onClick={DisplayGoogle} href="https://www.google.fr">Google</a>
        </>
    )
}
export default DemoEvent