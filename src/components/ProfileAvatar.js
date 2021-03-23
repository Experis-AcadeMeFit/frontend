
import '../CSS/Profileavatar.css'
import davatar from '../assets/images/default-avatar.png'
import { useState } from 'react'

const Profileavatar =()=>{
    const [avatar,SetAvatar]=useState();

    const uploadAvatar =(e)=> {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
          
        }
        reader.readAsDataURL(file);
      }

return(

    <div className="avatarWrap">
        <img src={davatar} alt="default avatar" />
    </div>
)
}

export default Profileavatar