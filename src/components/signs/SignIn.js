import React, { useState } from "react";
import SignConfirmationCard from "./SignConfirmationCard";




function SignIn() {
const [formData, setFormData] = useState({
  email:"",
  password:""
});
// const [Password, setPassword] = useState("");

const [isConfirmed, setIsConfirmed] = useState(false)

const handleChange = (e)=>{ 
  const {name,value} = e.target;
  setFormData({
    ...formData,
    [name]:value
  }) 
};
const handleSubmit = (e)=>{
  e.preventDefault();
  if (formData.email.includes("@") && formData.password.length > 4) {
    setIsConfirmed(true)
  }
}


  return (
    <section>
      {!isConfirmed ? (
      <div style={{margin:"8rem"}}>
      <form onSubmit={handleSubmit}>
     <section className="form-row">
     <div className="labin">
       <label htmlFor="email">Email</label>
       <input
         type="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         placeholder="Enter a valid email"
         required
       />
     </div>
     </section>
     <section className="form-row">
     <div className="labin">
       <label htmlFor="password">Password</label>
       <input
         type="password"
         name="password"
         value={formData.password}
         onChange={handleChange}
         placeholder="Enter your password"
         required
       />
     </div>
     </section> 
     <section>
     {formData.email.includes("@")  && formData.password.length > 4 ? null : (
             <p className="redError">please enter valid email and password, it must contain at least 5 digits.</p>
           )}
         </section>
     <section className="form-row">
       <button
       className="yellow-btn">
         Sign in
       </button>

     </section>
   </form> 
   </div>

      ):(
        <div style={{margin:"8rem"}}>
          <SignConfirmationCard/>
        </div>
        
      )
      }
    </section>
  );
}

export default SignIn;
