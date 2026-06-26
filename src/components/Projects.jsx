function Projects(){

const projects=[

{
title:"Wi-Fi Based Smart Digital Notice Board",
desc:"A web-controlled digital notice board that allows remote updates of messages and images.",
tech:"Raspberry Pi • HTML • CSS • JavaScript • MongoDB"
},


{
title:"Forest Time-Loop Adventure Game",
desc:"An interactive 3D adventure experience with animated environments and player navigation.",
tech:"React.js • Three.js • Node.js • MongoDB"
},


{
title:"Emergency QR Medical System",
desc:"A QR-based emergency information system providing instant access to medical details.",
tech:"React.js • Node.js • MongoDB"
}


]


return(


<section id="projects" className="projects">


<div className="project-heading">


<p>
SELECTED WORK
</p>


<h2>
Projects
</h2>


</div>





<div className="project-grid">



{
projects.map((project,index)=>(


<div 
className={
index===0 
? "project-card big"
: 
"project-card"
}

key={index}

>


<div className="project-number">

0{index+1}

</div>


<h3>

{project.title}

</h3>


<p>

{project.desc}

</p>



<span>

{project.tech}

</span>



</div>


))

}



</div>



</section>


)

}


export default Projects;