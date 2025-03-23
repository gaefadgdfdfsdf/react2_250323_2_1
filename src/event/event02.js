import React, { useState } from 'react'

const Event02 = () => {
    const [msg, setMsg ] = useState('마우스 올려보세요');
    const handleEnter = () => {
        setMsg('마우스HOVER')
    }
    const handleLeave = () => {
        setMsg('마우스OUT')
    }
    return (
        <>
            <p onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                {msg}
            </p>
        </>
    )
}

export default Event02