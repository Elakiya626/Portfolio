import { useEffect, useRef } from "react";
import * as THREE from "three";


function Scene3D(){


const mountRef = useRef(null);



useEffect(()=>{


const currentMount = mountRef.current;


if(!currentMount) return;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(

45,

1,

0.1,

1000

);

const renderer = new THREE.WebGLRenderer({

alpha:true,

antialias:true

});

renderer.setSize(450,450);

currentMount.appendChild(
renderer.domElement
);

const geometry = new THREE.IcosahedronGeometry(1.5,2);

const material = new THREE.MeshStandardMaterial({

color:"#ffffff",

metalness:0.8,

roughness:0.25

});



const mesh = new THREE.Mesh(
geometry,
material
);


scene.add(mesh);





const light = new THREE.PointLight(
0xffffff,
3
);


light.position.set(3,3,3);


scene.add(light);




const ambient = new THREE.AmbientLight(
0xffffff,
1
);


scene.add(ambient);




camera.position.z=5;




let animation;



function animate(){


animation=requestAnimationFrame(animate);


mesh.rotation.x +=0.006;


mesh.rotation.y +=0.008;



renderer.render(
scene,
camera
);


}


animate();





return()=>{


cancelAnimationFrame(animation);



if(currentMount && renderer.domElement){

currentMount.removeChild(
renderer.domElement
);

}



renderer.dispose();


}



},[])



return(

<div 
className="scene"
ref={mountRef}
>

</div>

)

}



export default Scene3D;