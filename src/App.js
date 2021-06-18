import './App.css';
import React, {useState} from 'react';

var emojiDictionary = {
  "😃": "Smilling",
  "😂": "Funny",
  "🔥": "Fire",
  "❤️": "Red Heart",
  "👍": "Thumbs up",
  "✨": "Sparkle",
  "💡" : "Bulb",
  "⚽": "Flower"
}

function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event){
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if(meaning == undefined){
      meaning = "Emoji is not present, Try other one";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div>
      <h1>Find Meaning of given emoji</h1>
      <input onChange={emojiInputHandler}/>
      <h2>{meaning}</h2>
      {emojiDictionary.map(function(emoji){
        return(
          <span onClick = {() => emojiClickHandler(emoji)} key = {emoji}></span>
        );
      })}
    </div>
  );
}

export default App;
