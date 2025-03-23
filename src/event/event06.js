import React, { useState } from 'react'

const Event06 = () => {
    const [value, setValue] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg(value);
    }   
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" placeholder='값 입력' />  
                <button type="submit">CLICK</button>
                <p>{msg}</p> 
            </form>
        </>
    )
}

export default Event06