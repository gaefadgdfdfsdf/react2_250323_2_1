import React, { useEffect, useState } from 'react'

// 스크롤 이벤트
const Event05 = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        const handleScroll = () =>{
            setScrollY(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);

        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return (
        <div className='h-[2000px]'>
            <div className='fixed top-0 left-0'>
                <p>{scrollY}px</p>
            </div>
        </div>
    )
}

export default Event05