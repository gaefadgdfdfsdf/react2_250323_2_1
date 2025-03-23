import React, { useRef, useState } from 'react'

const Step04 = () => {
    const toggleRef = useRef(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = ()=>{
        toggleRef.current = !toggleRef.current;
        console.log(toggleRef.current);
        setIsVisible(toggleRef.current);
    }
    return (
        <>
            <button onClick={toggleVisible}>TOGGLE</button>
            {isVisible && <div>표시!</div>}
        </>
    )
}

export default Step04