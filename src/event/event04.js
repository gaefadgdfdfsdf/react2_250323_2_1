import React, { useState } from 'react'

// 체인지 이벤트
const Event04 = () => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) =>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <>
            <input onChange={handleChange} type="text" placeholder='타자입력' />
            <p>{inputValue}</p>
        </>
    )
}

export default Event04