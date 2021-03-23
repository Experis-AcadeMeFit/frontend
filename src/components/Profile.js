
import { useState,useEffect } from "react"
import davatar from '../assets/images/default-avatar.png'
import '../CSS/Profile.css'
const Profile=(props)=>{

      //Can change--
    const [avatar, setAvatar]=useState();
    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    //ftness attributes 
    //request to be a contributor 
    //Ftness level evaluation
    useEffect(() => {
        setUsername(props.curUser.username)
        setEmail(props.curUser.email)
        setPassword(props.curUser.password)
    }, [props])


  const onNameChange = (e) => {
    const name = e.target.value;
    setUsername(name);
  };
  const onEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const changeSettings = (e) => {
    e.preventDefault();
    
    const inputs=document.querySelectorAll('.profile  input') 


    if (inputs[0].className === "") {
      
        inputs.forEach(input => {
            input.classList.add("inputEnabled");
            input.disabled = false
        });
        console.log(inputs[0].className)

  } else{
    inputs.forEach(input => {
        input.classList.remove("inputEnabled")
        input.disabled = true

    });
  }

  }
const handleSumbit=(e)=>{
console.log("wuu")
}
    return(
        <div className="profile">
            <div className="avatarWrap">
            <img src={davatar} alt="default avatar"/>
            </div>
            <form onSubmit={handleSumbit}>

        <input
          id='name-input'
          type='text'
          placeholder={"username: "+username}
          onChange={onNameChange}
          value={username}
          disabled
        />

        <input
          id='email-input'
          type='email'
          placeholder={"Email: "+email}
          onChange={onEmailChange}
          value={email}
          disabled
        />

        <input 
          id='password-input'
          type='password'
          placeholder={"password:"}
          onChange={onPasswordChange}
          value={password}
          disabled
        />

        <button className="CTA"
          onClick={changeSettings}
        >change settings</button>
      </form>
        </div>
    );

}

export default Profile