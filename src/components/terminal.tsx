import { useState } from "react";
import { ReactTerminal } from "react-terminal";
import ExploitOutput from "./exploit_output";

function Terminal() {
    const commands = {
        whoami: "lugvitc",
        cd: (directory: string) => `changed path to ${directory}`,
        exploit: () => {
            return <ExploitOutput />
        },
    };

    const welcomeMessage = (
        <span className="m-auto">
            LUGVITC Recruitment Results. Hack to see the result. Run <strong>exploit</strong>
            <br />
        </span>
    );

    return (
        <ReactTerminal
            welcomeMessage={welcomeMessage}
            commands={commands}
            theme="material-ocean"
        />
    );
}

export default Terminal;