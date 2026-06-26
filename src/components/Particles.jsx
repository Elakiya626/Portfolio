import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";



function ParticleBackground(){



const particlesInit = useCallback(async(engine)=>{


await loadSlim(engine);


},[]);




return(


<Particles


id="particles"


init={particlesInit}


options={{


background:{


color:"transparent"


},




particles:{


number:{


value:80


},




color:{


value:"#ffffff"


},




opacity:{


value:0.3


},




size:{


value:2


},




move:{


enable:true,


speed:0.5


},




links:{


enable:true,


distance:120,


color:"#ffffff",


opacity:0.15,


width:1


}


}



}}



/>



)


}



export default ParticleBackground;