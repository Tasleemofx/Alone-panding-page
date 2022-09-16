import React, {useState} from "react"
import './App.css';

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer"
import { data } from "./data/aboutData";
function App() {
  const [datalist, setDatalist] = useState(data)
  
  return (
    <div className="App">
      <div className="main">
        <Nav />
        <Hero />
      </div>
      { datalist.map(({id, greenText, Topic, img, paraText})=>{
          return(
            <div key={id}>
              <About
              greenText={greenText}
              Topic={Topic}
              img={img}
              paraText={paraText}/>
            </div>
          )
        })
      
}
<Showcase/>
<Footer/>
    </div>
  );
}

export default App;
