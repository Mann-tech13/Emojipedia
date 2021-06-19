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
  "⚽": "Ball"
}

var emojiInData = Object.keys(emojiDictionary)

function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event){
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if(meaning === undefined){
      meaning = "Emoji is not present, Try other one";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div class="App">
      <h1>Find Meaning of emoji</h1>
      <input id="input" onChange={emojiInputHandler}/>
      <h2>{meaning}</h2>
      {
        emojiInData.map(emoji => {
          return <span id="emoji" onClick={() => emojiClickHandler(emoji)} key={emoji}>{emoji}</span>
        })
      }
    </div>
  );
}

export default App;
