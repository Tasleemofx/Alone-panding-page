import React, {useState} from "react"
import './App.css';

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import { data } from "./data/aboutData";
function App() {
  const [datalist, setDatalist] = useState(data)
  
  return (
    <div className="App">
      <Nav />
      <Hero />
      { datalist.map(({id, greenText, Topic, img, paraText})=>{
          return(
            <About key={id}
            greenText={greenText}
            Topic={Topic}
            img={img}
            paraText={paraText}/>
          )
        })
      
}
    </div>
  );
}

export default App;
