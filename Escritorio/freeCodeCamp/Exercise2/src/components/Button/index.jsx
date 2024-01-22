import { useState } from "react" 
const Button = () => {
    const [count, setCount] = useState(0);
    const clickButton = () => {
        setCount(count + 1);
    }

    const resetButton = () =>{
        setCount(0)
    }

    return(
        <div>
            <div className="border-white border-solid border-8 h-56 w-56 p-8 mx-auto mt-36 text-center">
                {count}
            </div>

            <div className="inline-grid text-2xl mt-10 w-1/5 leading-10 gap-4">
                <button className="bg-blue-600 rounded-md border-white border-solid border-2" onClick={ clickButton }>Click</button>
                <button className="bg-blue-600 rounded-md border-white border-solid border-2" onClick={ resetButton }>Reiniciar</button>
            </div>

        </div>
    )
        
        
}
export default Button
