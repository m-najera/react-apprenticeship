import { useState } from "react";

// Componente usando arrow function
const InputComponent = ({ labelContent }) => {
    const [value, setValue] = useState()
    const onChangeInput = (e) => {
        let newValue = e.target.value
        setValue(newValue)
    }
    return (
        <div>
            <label style={{color: "#FA0", marginLeft: 10}}>
                {labelContent}:
                <input onChange={onChangeInput} />
            </label>
        </div>
    )
}

export default InputComponent