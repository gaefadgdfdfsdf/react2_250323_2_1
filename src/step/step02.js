import React, { useRef } from 'react'

/*
    useRef사용법2. 애니메이션 제어
*/
const Step02 = () => {
    const aniRef = useRef(null);
    return (
        <>
            <div ref={aniRef} className='box'></div>
            <button onClick={()=>{
                aniRef.current.classList.add('animate');
            }}>CLICK</button>
        </>
    )
}

export default Step02