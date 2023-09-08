import './App.css'
import { TerminalContextProvider } from "react-terminal";
import Terminal from './components/terminal';

function App() {

    return (
        <>
            <div id='terminal-wrapper' className='flex w-full items-center'>
                <div className='max-w-4xl w-full m-auto h-terminal'>
                    <TerminalContextProvider>
                        <Terminal />
                    </TerminalContextProvider>
                </div >
            </div>
        </>
    )
}

export default App
