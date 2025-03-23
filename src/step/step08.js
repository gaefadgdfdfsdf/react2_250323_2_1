import React, { useMemo, useState } from 'react'

const Step08 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTodo = () => {
        setTodos((t) => [...t, '새로운 할 일']);
    }

    const exCal = (num) => {
        console.log('복잡한 계산');
        for (let i=0; i<1000000000; i++){
            num+=1;
        }
        return num;
    }

    // const calculation = exCal(count);

    const calculation = useMemo(()=>{
        const calculation = exCal(count);
        return calculation
    }, [count]);

    return (
        <>
            <div>
                <h2>TODOLIST</h2>
                {todos.map((todo, index)=> {
                    return <p key={index}>{todo}</p>
                })}
                <button onClick = {addTodo}>CLICK</button>
            </div>
            <div>
                <p>카운트 : {count}</p>
                <button onClick = {increment}>CLICK</button>
                {calculation}
            </div>
        </>
    )
}

export default Step08