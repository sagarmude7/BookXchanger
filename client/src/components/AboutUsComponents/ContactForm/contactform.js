 import React,{useState,useEffect} from 'react'
import './style.css'
import { Input } from '@material-ui/core';

const Contact =() =>{
    const nameError= "";
    const emailError= "";
    const messageError = "";
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [loader, setLoader] = useState(false);



    const validate = () => {
        let nameError = "";
        let emailError = "";
        // let passwordError = "";
    
        if (!this.state.name) {
          nameError = "name cannot be blank";
        }
    
        if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }
    
        if (emailError || nameError) {
          this.setState({ emailError, nameError });
          return false;
        }
    
        return true;
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setName("");
        setEmail("");
        setMessage("");
  };

    return(
        <form className="form"  onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        
      >
        Submit
      </button>
    </form>
    );
};


export default Contact 
