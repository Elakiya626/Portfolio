function Skills(){

const skills=[

"React.js",

"Node.js",

"Express.js",

"JavaScript",

"Three.js",

"MySQL",

"MongoDB",

"C & Java",

"HTML & CSS"



]


return(


<section id="skills" className="skills">


<div className="skills-title">


<p>
TECH STACK
</p>


<h2>

Technologies I Work With

</h2>


</div>





<div className="skills-grid">


{

skills.map((skill,index)=>(


<div 
className="skill-card"
key={index}
>


<span>

0{index+1}

</span>


<h3>

{skill}

</h3>


</div>


))

}



</div>



</section>


)

}


export default Skills;