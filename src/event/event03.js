import React, { useState } from 'react'
// 마우스무브
const Event03 = () => {
    const [mouseP, setMoustP ] = useState({x:0,y:0});

    const handleMove = (e) =>{
        setMoustP({x: e.clientX, y:e.clientY})
    }

    return (
        <>
            <div onMouseMove={handleMove} className='h-[200px] bg-red-100'>
                <p>x:{mouseP.x}, y:{mouseP.y}</p>
            </div>
        </>
    )
}

export default Event03