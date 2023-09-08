/*
 written by: Lawrence McDaniel
 Modified by: Meetesh Saini (8 Sep, 2023)

 This is a refactored implementation of the Matrix Raining Letters effect based on this blog post
 https://dev.to/javascriptacademy/matrix-raining-code-effect-using-javascript-4hep


*/
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import "./styles.css";

type MatrixRainingLettersProps = { keyName: string | null, custom_class: string | null, color: string };

const renderMatrix = (
    ref: React.RefObject<HTMLCanvasElement>,
    color: string,
    interval: number,
    setIntervalState: React.Dispatch<React.SetStateAction<number>>
) => {
    let canvas = ref.current;
    if (!canvas) return;
    let context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const render = () => {
        if (!context || !canvas || !interval) return;
        context.fillStyle = "rgba(0, 0, 0, 0.05)"; // black w a tiny bit of alpha
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = color;
        context.font = fontSize + "px monospace";

        for (let i = 0; i < rainDrops.length; i++) {
            // randomize the string of characters to render
            const text = alphabet.charAt(
                Math.floor(Math.random() * alphabet.length)
            );
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (
                rainDrops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    clearInterval(interval);
    setIntervalState(setInterval(render, 30));
};

const MatrixRainingLetters: React.FC<MatrixRainingLettersProps> = (props) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const keyName = "mrl-" + props.keyName;
    const [interval, setIntervalState] = useState(setInterval(() => { }, 30));

    const thisClassName = "mrl-container " + props.custom_class;
    useEffect(() => {
        if (ref.current) {
            return renderMatrix(ref, props.color, interval, setIntervalState);
        }
    }, [ref, props.color]);

    return (
        <React.Fragment>
            <canvas key={keyName} className={thisClassName} ref={ref} />
        </React.Fragment>
    );
};

export default MatrixRainingLetters;