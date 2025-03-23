import React, { useRef } from 'react'

/*
    [ HOOK ]
    상태(state)와 다른 React기능들을 사용할 수 있게
    해주는 특별한 함수

    [ useRef ]
    컴포넌트 내부에서 특정 DOM요소에 접근하기 위해
    사용되는 HOOK
    document.querySelector와 비슷한 역할
    React의 방식으로 DOM요소에 접근하는 더 좋은 방법

    useRef사용법 1. DOM요소 접근
*/

const Step01 = () => {
    const buttonRef = useRef(null);
    return (
        <>
            <button ref={buttonRef} onClick={()=>{
                // console.log(buttonRef);
                console.log(buttonRef.current);
            }}>CLICK</button>
        </>
    )
}

export default Step01