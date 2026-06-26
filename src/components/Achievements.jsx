function Achievements(){


const achievements=[


{
title:"Placement Coordinator",
year:"2024 - Present",
desc:"Coordinating placement activities and supporting recruitment processes."
},


{
title:"Autodesk Certification",
year:"AutoCAD Electrical Design (2023)",
desc:"Completed Autodesk Authorized Course in AutoCAD Electrical Design."
},


{
title:"Maven Silicon Certification",
year:"Embedded Application Development Using ARM Processor (2025)",
desc:"Certificate of Participation for completing the “Embedded Application Development Using ARM Processor” program by Maven Silicon (ARM Training Partner), held from 26-Apr-2025."

},


{
title:"Typewriting Certification",
year:"English & Tamil Typewriting - Lower",
desc:"Certified typing skills in English and Tamil."
}


]



return(


<section id="achievements" className="achievements">



<div className="achievement-title">


<p>
ACHIEVEMENTS
</p>


<h2>
Milestones & Certifications
</h2>


</div>





<div className="achievement-grid">


{

achievements.map((item,index)=>(


<div className="achievement-card" key={index}>


<span>

0{index+1}

</span>



<h3>

{item.title}

</h3>


<h4>

{item.year}

</h4>



<p>

{item.desc}

</p>



</div>


))

}



</div>


</section>


)

}


export default Achievements;