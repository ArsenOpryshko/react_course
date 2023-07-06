import logo from './logo.svg';
import './App.css';

import {Posts} from "./Components/Posts";
import {useState} from "react";
import {SpaceX} from "./Components/SpaceX";
function App() {
    const [showPosts, setShowPosts] = useState(false)
    const [showSpaceX, setShowSpaseX] = useState(false)

    return (
      <div className="App">
        <header>
            {!showPosts &&<button onClick={()=>{setShowPosts(true)}}>Posts homework</button>}
            {showPosts && <button onClick={()=>{setShowPosts(false)}}>Close posts homework</button>}
            {!showSpaceX &&<button onClick={()=>{setShowSpaseX(true)}}>SpaceX homework</button>}
            {showSpaceX && <button onClick={()=>{setShowSpaseX(false)}}>Close SpaceX homework</button>}
        </header>
          {showPosts && <Posts/>}
          {showSpaceX && <SpaceX/>}
      </div>
  );
}

export default App;