import React, {useState} from 'react';
import './App.css';
import Component1 from "./components/Component1";



function App() {
    const [allGreen, setAllGreen] = useState(false);
    const [newTitle, setNewTitle] = useState<string>('');

    const handleFinalCallback = (title: string) => {
        setAllGreen(true);
        console.log('App: ', title)
        setNewTitle(title)
    };

    return (
        <div className="App">
            <h1>Callback Hell</h1>
            <div className="container">
                <Component1 callBack={handleFinalCallback}/>
            </div>
            {allGreen && <p>{newTitle}</p>}
        </div>
    );
}


export default App;
