import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';


function App() {
  // fetches JSON data passed in by flask.render_template and loaded
  // in public/index.html in the script with id "data"
  const args = JSON.parse(document.getElementById("data").text);
  const [numClicks, setNumClicks] = useState(0);
  const [artist_ids, setartistids] = args.artist_ids;


  function onButtonClick() {
    console.log(args)
    console.log(JSON.stringify({ "num_clicks": numClicks }));
    fetch('/increment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "num_clicks": numClicks }),
    }).then(response => response.json()).then(data => {
      console.log(data);
      setNumClicks(data.num_clicks_server);
    });
  }
  function artistid_list() {
    console.log(args.artist_ids.length)
    var html_code = "";
    for (var i = 0; i < args.artist_ids.length; i++) {
      html_code += "<h4>" + args.artist_ids[i] + "</h4>";
    }
    sethtml_code(html_code);
  }

  function add() {
    console.log(args)
    console.log(JSON.stringify({ "artist_ids": artist_ids }));
    fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "artist_ids": artist_ids }),
    }).then(response => response.json()).then(data => {
      console.log(data);
      setNumClicks(data.num_clicks_server);
    });
  }


  let has_artists_saved = true;
  return (
    <>
      <h1>Victor's Song Explorer</h1>
      <button onClick={onButtonClick}>click me!</button>
      <h1> button had been clicked {numClicks} times!</h1>
      {has_artists_saved ? (
        <>
          <h2>{args.song_name}</h2>
          <h3>{args.song_artist}</h3>
          {args.artist_ids.map((artist_id) => (
            <h4>{artist_id}</h4>
          ))}
          <div>
            <img src={args.song_image_url} width={300} height={300} />
          </div>
          <div>
            <audio controls>
              <source src={args.preview_url} />
            </audio>
          </div>
          <a href={args.genius_url}> Click here to see lyrics! </a>
        </>) :

        <h2>Looks like you don't have anything saved! Use the form below!</h2>
      }
      <h1>Save a favorite artist ID for later:</h1>
      <form method="POST" action="/save">
        <input type="text" name="artist_id" />
        <input type="submit" value="add" />

      </form>
      <form method="POST" action="/save">
        <input type="text" name="artist_id" />
        <input type="submit" value="Submit" />

      </form>
    </>
  );
}
// TODO: Implement your main page as a React component.


export default App;
