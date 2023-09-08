/*
 written by: Lawrence McDaniel

 This is a refactored implementation of the Matrix Raining Letters effect based on this blog post
 https://dev.to/javascriptacademy/matrix-raining-code-effect-using-javascript-4hep


*/
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import "./styles.css";

type MatrixRainingLettersProps = { key: string | null, custom_class: string | null, color: string };

const renderMatrix = (ref: React.RefObject<HTMLCanvasElement>, color: string) => {
    let canvas = ref.current;
    if (!canvas) return;
    let context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
        if (!context || !canvas) return;
        context.fillStyle = "rgba(0, 0, 0, 0.05)"; // black w a tiny bit of alpha
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = color; // pure green
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

    return () => {
        setInterval(render, 30);
    };
};

const MatrixRainingLetters: React.FC<MatrixRainingLettersProps> = (props) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const keyName = "mrl-" + props.key;
    const thisClassName = "mrl-container " + props.custom_class;
    useEffect(() => renderMatrix(ref, props.color), [props.color]);

    return (
        <React.Fragment>
            <canvas key={keyName} className={thisClassName} ref={ref} />
        </React.Fragment>
    );
};

export default MatrixRainingLetters;