import React, { useRef } from 'react'

const Step03 = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }
    return (
        <>
            <input ref={inputRef} type='text' className='outline outline-1' />
            <button onClick={focusInput}>CLICK</button>
        </>
    )
}

export default Step03