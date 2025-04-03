import { useState, FormEvent } from "react"

interface InputProps {
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
}

const Input = ({taskList, setTaskList}: InputProps) => {
    const [input, setInput] = useState("")
    const handleAddTask = (e: FormEvent) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("");
    }
    return (
        <>
            <form className="flex flex-row items-center gap-3">
                <input 
                    className="border rounded-lg py-1.5 px-2.5 text-lg"
                    type="text"
                    placeholder="Add a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                    className="bg-violet-200 text-white py-2 px-3.5 rounded-lg font-semibold hover:opacity-70"
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default Input;