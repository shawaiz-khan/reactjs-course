import { useEffect, useState } from 'react'
import "../App.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    let countHelper = count;

    const handleIncrement = () => {
        countHelper++;
        setCount(countHelper);
    }

    const handleDecrement = () => {
        if (count == 0) {
            setCount(0);
        } else {
            countHelper--;
            setCount(countHelper);
        }
    }

    const handleAlert = () => {
        console.log("Hello, this is an Alert");
    }

    useEffect(() => {
        handleAlert();
    }, [count]);

    return (
        <main className="main">
            <h1 className="counting">{count}</h1>
            <div className="btns-container">
                <button className="btn" onClick={handleIncrement}>+</button>
                <button className="btn" onClick={handleDecrement}>-</button>
            </div>
        </main>
    )
}