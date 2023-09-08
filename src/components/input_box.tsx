import MatrixRainingLetters from "./matrix_rain/matrix_rain"
import troops from '../selected';
import React, { useEffect, useState } from "react";

export default function Input() {
    const [color, setColor] = useState("");
    const [input, setInput] = useState("");
    const [message, setMessage] = useState(<>Registration Number</>);
    const [askInput, setAskInput] = useState(true);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setAskInput(false);
        if (input in troops) {
            setColor("#0F0");
            setMessage(
                <>
                    Access granted to Linux Club. <br />
                    Congratulations. <br />
                    <div className="font-bold text-4xl m-auto">{troops[input]}</div>
                </>
            );

        }
        else {
            setColor("#F00");
            setMessage(
                <>
                    Access denied to Linux Club. <br />
                    Better Luck next time.
                </>
            );
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
                <form onSubmit={handleSubmit} className="text-center p-6 absolute m-auto bg-[#11151a] flex items-center justify-center flex-col gap-2 rounded-md">
                    <div className="p-2 text-xl">{message}</div>
                    {askInput && (
                        <>
                            <input
                                className="mb-2 p-2 outline-none rounded text-black"
                                type="text"
                                placeholder="Access Code"
                                value={input}
                                onChange={handleInputChange}
                            />
                            <button type="submit">Submit</button>
                        </>
                    )
                    }
                </form>
            </div>
        </>
    )
}