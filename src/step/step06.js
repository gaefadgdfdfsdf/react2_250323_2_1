import React, { useEffect, useState } from 'react'

const Step06 = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(()=>{
        console.log(`카운트가 ${count}로 변경`);
    }, [count, count2]); // count값이 변경될때만 실행
    // 의존성배열(Dependancy Array)

    return (
        <>
            <p>카운트 : {count}</p>
            <button onClick={()=>{setCount(count + 1)}}>CLICK</button>
        </>
    )
}

export default Step06