import React, { useState } from 'react'

// 클릭이벤트
const Event01 = () => {
    const [ count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>CLICK</button>
        </>
    )
}

export default Event01