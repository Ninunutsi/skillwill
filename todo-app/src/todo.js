import React, { useState } from "react";

function Todo(){ 

    const [inputValues, setInputValues] = useState([]);
    const [pushedValues, setPushedValues] = useState([]);

    function handleButtonClick() {
        setInputValues([...inputValues, ""]);
    }

    function handleRemoveClick(index) {
        const newInputValues = [...inputValues];
        newInputValues.splice(index, 1);
        setInputValues(newInputValues);
      }

    function handleInputChange(event,index) {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
    }

    function handlePushButtonClick() {
        const lastInputValue = inputValues[inputValues.length - 1];
        setPushedValues([...pushedValues, lastInputValue]);
        setInputValues(inputValues.slice(0, -1));
    }

        return(
            <div className="content">
                <div className="container"> 
                <h1 className='todo-header'>Todo List</h1>
                    <div className="todo">
                        {inputValues.map((inputValue, index) => (
                            <div  key={index}>
                            <input
                            className="input"
                            placeholder="Enter to do task"
                            value={inputValue}
                            onChange={(event) => handleInputChange(event, index)}
                            />

                            <button onClick={() => handleRemoveClick(index)} className="btn remove">Remove</button>

                            <button onClick={handlePushButtonClick} className="btn done-btn">Mark as done</button>
                            </div>
                            
                        ))}
                    </div>
                    <button className="btn add" onClick={handleButtonClick}>Add to do task</button>
                </div>

                <div className="container">
                    <h1 className='todo-header'>Done</h1>
                    <div className="done">
                        <ul className="ul">
                            {pushedValues.map((value, index) => (
                            <li className="done-para" key={index}>{value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
}

export default Todo