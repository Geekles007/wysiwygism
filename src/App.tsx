import React from 'react';
import './App.scss';
import Wysigygism from "./modules/wysiwygism";
import EditorController from "./controller"

function App() {
    const {getContent} = EditorController;

    return (
        <div className="App">
            <Wysigygism defaultValue={getContent} />
        </div>
    );
}

export default App;
