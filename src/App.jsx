import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import ParticleBackground from "./components/Particles";
import Scene3D from "./components/Scene3D";



function App(){

return(

<>

<Loader/>

<ParticleBackground/>

<Cursor/>

<Navbar/>

<Hero/>

<About/>

<Projects/>

<Skills/>

<Achievements/>

<Contact/>

</>

)

}


export default App;