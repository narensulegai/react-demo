import './App.css';
import React, {useState} from 'react';
import HelloWorldWithProps from "./components/HelloWorldWithProps";
import HelloWorldApi from "./components/HelloWorldApi";
import Ticker from "./components/Ticker";
import HelloWorld from "./components/HelloWorld";
import HelloWorldWithState from "./components/HelloWorldWithState";
import HelloWorldFunction from "./components/HelloWorldFunction";
import HelloWorldReactElement from "./components/HelloWorldReactElement";

function App() {

    const examples = {
        HelloWorld: <HelloWorld/>,
        HelloWorldReactElement: <HelloWorldReactElement/>,
        HelloWorldFunction: <HelloWorldFunction/>,
        HelloWorldWithState: <HelloWorldWithState/>,
        HelloWorldWithProps: <HelloWorldWithProps name={"React"}/>,
        HelloWorldApi: <HelloWorldApi/>,
        Ticker: <Ticker/>,
    }
    const [example, setExample] = useState('HelloWorld');

    const handleOnExampleChange = (e) => {
        setExample(e.target.value);
    }

    return (
        <>
            <div>
                <select onChange={handleOnExampleChange}>
                    <option value="HelloWorld">Hello World</option>
                    <option value="HelloWorldReactElement">Hello World React Element</option>
                    <option value="HelloWorldWithState">Hello World With State</option>
                    <option value="HelloWorldWithProps">Hello World With Props</option>
                    <option value="HelloWorldApi">Making API calls</option>
                    <option value="Ticker">Ticker</option>
                </select>
            </div>
            <br/>
            <div>
                {examples[example]}
            </div>
        </>
    );
}

export default App;
