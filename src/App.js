// Include your app wide css in App.css, you can import css in every component file,
// but it will create confusion in terms of overwriting css, so stick to just one css file.
// Css classes in defined here will be available in every child component
import './App.css';
import React, {useState} from 'react';
import HelloWorldWithProps from "./components/HelloWorldWithProps";
import HelloWorldApi from "./components/HelloWorldApi";
import Ticker from "./components/Ticker";
import HelloWorld from "./components/HelloWorld";
import HelloWorldWithState from "./components/HelloWorldWithState";
import HelloWorldFunction from "./components/HelloWorldFunction";
import HelloWorldReactElement from "./components/HelloWorldReactElement";

const examples = {
    HelloWorld: <HelloWorld/>,
    HelloWorldReactElement: <HelloWorldReactElement/>,
    HelloWorldFunction: <HelloWorldFunction/>,
    HelloWorldWithState: <HelloWorldWithState/>,
    HelloWorldWithProps: <HelloWorldWithProps name={"React"}/>,
    HelloWorldApi: <HelloWorldApi/>,
    Ticker: <Ticker/>,
}

function App() {
    // This is a react hook, stick to class components if you dont want to use spend time learning react hooks
    // React hooks can throw you off with un-expected behaviour, unlike class components,
    // react hook components (functions) are run every time the component has to re-render,
    // since it is not possible to know what is happening inside a function.
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
