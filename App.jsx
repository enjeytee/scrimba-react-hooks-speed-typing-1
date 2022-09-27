import React from "react";

function App() {
    const [text, setText] = React.useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const numOfWords = (text) => {
        const wordsArray = text.split(" ").filter(element => String(element).trim());
        return wordsArray.length;
    };
    return (
        <div>
            <h1>Speed Typing Game</h1>
            <textarea 
                value={text}
                onChange={handleChange}
            />
            <h4>Time remaining: 0</h4>
            <button
                onClick={() => console.log(numOfWords(text))}
            >Start game</button>
            <h1>Word count: 0</h1>
        </div>
    )
};
export default App;