import MatrixRainingLetters from "./matrix_rain/matrix_rain"
import troops from '../selected';
import React, { useEffect, useState } from "react";

export default function Input() {
    const [color, setColor] = useState("");
    const [input, setInput] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (input in troops) {
            setColor("#0F0");
        }
        else {
            setColor("#F00");
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    useEffect(() => {
        setColor("#00F");
    }, []);

    return (
        <>
            <MatrixRainingLetters keyName={"rain"} custom_class={"absolute top-0 left-0 z-20"} color={color} />
            <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 z-30">
                <form onSubmit={handleSubmit} className="p-6 absolute m-auto bg-[#11151a] flex items-center justify-center flex-col gap-2 rounded-md">
                    <div className="p-2 text-xl">Registration Number</div>
                    <input
                        className="mb-2 p-2 outline-none rounded text-black"
                        type="text"
                        placeholder="Access Code"
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}