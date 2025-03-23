import React, { useEffect, useState } from 'react'

/*
    [ useEffect ]
    컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 할 수 있는 HOOK
*/
const Step05 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        // 컴포넌트가 렌더링될 때마다 실행
        console.log('컴포넌트가 렌더링됨');

        // 선택사항 : 컴포넌트가 제거(언마운트)되거나 업데이트 되기 전 실행
        return ()=> {
            console.log('클린업');
        }
    })
    return (
        <>
            <p>카운트 : {count}</p>
            <button onClick={()=>{setCount(count + 1)}}>CLICK</button>
        </>
    )
}

export default Step05