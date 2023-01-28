import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

const Sample = () => {

    const [rangeValue, setRangeValue] = useState<number>(0)
    const [inputValue, setInputValue] = useState<string>("")
    const [text, setText] = useState<string>("")

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    //     setRangeValue(e.target.valueAsNumber)
        
    // }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue(e.target.value)
        
    }

    // useEffect(() => {
    //     if (rangeValue === 0) {
    //         return
    //     }

    //     setTimeout(() => {
    //         setText("ページ遷移します")
            
    //     }, 2000);
    
    // }, [rangeValue])

    useEffect(() => {
        if (inputValue === "") {
            return
        }

        setTimeout(() => {
            setText("ページ遷移します")
            
        }, 2000);
    
    }, [inputValue])
    

    return (
        <>
            <div>
                <h3>体重</h3>
                {/* <span>{inputValue} </span> */}
                <input type="text" value={inputValue} onChange={handleChange} min="0" max="100" />kg
                <p>{text}</p>
                {/* <input type="range" value={rangeValue} onChange={handleChange} min="0" max="100" /> */}
            </div>
        </>
    );
}

export default Sample