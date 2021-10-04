import { useState } from 'react';

function ButtonCounter() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                Click Me. Clicks: {counter}
            </button>
        </div>
    )
}

export default ButtonCounter
