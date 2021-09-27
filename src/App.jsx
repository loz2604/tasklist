import { useState } from "react"
import "./AppTask.css"

//  CRUD - create, read, update & delete
//  This application does all of these things
const App = () => {
    const [userInput, setUserInput] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    //  newTodo in brackets
    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = todos
        formData.push(userInput)
        setTodos([...formData])
        //  Or to change from string to object so we can have more than one value

        // setTodos([...formData, {
        //     value,
        //     checked: false,
        //     date: new Date()
        // }])
        setUserInput("")
    }

    return (
        <div className="wrappper">
            <form id="form" onSubmit={handleSubmit}>
                <label id="label" htmlFor="task">To Do List</label>
                <input id="task" type="text" placeholder="Enter New Task" onChange={handleInput} value={userInput} />
                <button id="submit" type="submit">Add Task</button>
            </form>
            <ul >
                {todos.map((todo) => (
                    <li className="grow" key={todo}>
                        {todo}{' '}
                        <button onClick={() => {
                            setTodos(todos.filter((t) => t !== todo));
                        }}
                        >x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;

// // const [isChecked, setIsChecked] = useState(checked);
// const handleChange = {index} => {


//     let list = isChecked;
//     list.push(e.target.checked)
//     setIsChecked([...list])
//     console.log(list)
//     console.log(isChecked)
//     console.log(e.target.checked)
// }

// const handleRemove = (x) => {
//     console.log("Ive been clicked")
//     console.log(x.target.value)
//     // for (e = 0; e < isChecked.length; e++) {
//     //     setIsChecked("");
//     // }
//     // if (e.target.checked === true) {
//     //     console.log("we are ticked")

//     // } else {
//     //     console.log("we aren't ticked")
//     // }
// }
{/* <input name="checkbox" type="checkbox" onChange={handleChange} /> */ }
{/* <ul>
                {todos.map((todo) => {
                    return <li key={todo}>{todo}{''}
                        <button id="remove" type="button" onClick={() => {
                            setTodos(todos.filter((t) => t !== todos));
                        }}>x</button>
                    </li>

                })}

            </ul> */}