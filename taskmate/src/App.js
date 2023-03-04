import './App.css';
import {useState} from "react";


function App() {
    const [count, setCount] = useState(0)
    console.log(useState(0))

    function handleAdd() {
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }

    function handleSub() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    function handleReset() {
        setCount(0)
    }

    return (
        <div className={'App'}>
            <div className={'box'}>
                <p>{count}</p>
                <button onClick={handleAdd} className={'add'}>add</button>
                <button onClick={handleSub} className={'sub'}>sub</button>
                <button onClick={handleReset} className={'reset'}>reset</button>
                <p>{count + 10}</p>
            </div>

        </div>
    );

}

export default App;
