import React, { useState } from 'react'

/*
    [ useEffect ]
    컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 할 수 있는 HOOK
*/
const Step05 = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>카운트 : {count}</p>
            <button onClick={()=>{setCount(count + 1)}}>CLICK</button>
        </>
    )
}

export default Step05