import Scene3D from "./Scene3D";


function Hero(){


return(


<section className="hero" id="home">



<div className="hero-content">



<p className="small-text">

FULL STACK DEVELOPER

</p>




<h1>

ELAKIYA 

<br/>



</h1>




<p className="hero-description">

Building modern web applications and interactive digital experiences using clean code, creative ideas and emerging technologies.

</p>




<div className="hero-buttons">



<a href="#projects">

<button className="primary-btn">

View Projects →

</button>

</a>





<a href="/src/assets/RESUME.pdf" download>


<button className="secondary-btn">

Download Resume ↓

</button>


</a>



</div>



</div>








<div className="visual-area">



<Scene3D/>





<div className="floating-card">


<p>

AVAILABLE FOR

</p>



<h3>

DEVELOPER ROLES

</h3>



</div>



</div>






</section>


)


}


export default Hero;