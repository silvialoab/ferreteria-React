function Button(props) {

    const handleClick = (event) => {
        console.log(event)
    }
    return(
        <>
            <button onClick={handleClick} style={{backgroundColor:props.backgroundColor}}>{props.text}</button>
        </>
    )
}

export {Button}