import React from "react";
import { testimonialData } from "../utils/data";

function Testimonials (){

  return (
<section class="section-container dark-bgd">
  <section class="section-center">
    <header class="section-header">
        <h2>Testimonials</h2> 
    </header>    
    <section class="section-body">
    {testimonialData.map((item,index)=>(
    <Testimonial key={index}{...item}/>
    ))}
    </section>

  </section> 

</section>)  
  }
  
export default Testimonials;
  
  const Testimonial = ({ id, image,name, comment })=>{
    return (

      <article className="testimony-card" key={id}>
        <figure className="testimony-header">
          <img 
          src={image}
          alt={name}
          className="testimony-img"
          />
          <figcaption>
            <h3>{name}</h3>
          </figcaption>    
        </figure>
        <div className="testimony-body">
          <h3>Review</h3>
          <blockquote>
            {comment}
          </blockquote>
          <section className="testimony-foot">
            <h3>Rating</h3>
            <Stars/>

          </section>
        </div>

      </article>

    )


  }


  const Stars = (star) => {
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <span key={index}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ee9972"><path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </span>
        ))}
      </>
    );
  };
  



