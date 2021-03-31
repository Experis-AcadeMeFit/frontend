
import { useState, useEffect, useCallback, useMemo,useContext } from "react"
import {UserContext,ContributerContext } from './exercises/MuscleContext';

import Profileavatar from './ProfileAvatar'
import RangeSlider from './Slider';
import '../CSS/Profile.css'
const Profile = (props) => {

    const [user, setUser] = useContext( UserContext);
    const [contributer, setContributer] = useContext( ContributerContext);
 



    const [isProfile,setIsProfile] =useState('')

    //Can change--
    const [inputDisabled, setInputDisabled] = useState(true)
  //  const [avatar, setAvatar] = useState();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [adress1, setAdress1] = useState('');
    const [adress2, setAdress2] = useState('');
    const [adress3, setAdress3] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const [city, setCity] = useState('');

    
    
    
    //Can change--
    //ftness attributes 
    const [heightval, setHeightval] = useState(0);
    const [weightval, setWeightval] = useState(0);
    const [BMI, setBMI] = useState(0);

    const sliderHeightChanged = useCallback(val => {
        setHeightval(val);
    }, []);

    const sliderWeightChanged = useCallback(val => {
        setWeightval(val);
    }, []);

    //calculate BMI
    useEffect(() => {
        let BMI = (weightval / ((heightval * heightval) / 10000)).toFixed(2);
        setBMI(BMI);
    }, [heightval, weightval])

    const sliderHeight = useMemo(
        () => ({
            min: 0,
            max: 260,
            value: heightval,
            step: 2,
            label: "height:",
            metric: "cm",
            onChange: e => sliderHeightChanged(e)
        }),
        [heightval, sliderHeightChanged]
    );

    const sliderWeight = useMemo(
        () => ({
            min: 0,
            max: 250,
            value: weightval,
            step: 2,
            label: "weight:",
            metric: "kg",
            onChange: e => sliderWeightChanged(e)
        }),
        [weightval, sliderWeightChanged]
    );





    

//show profoile
  //not working in mobile view?
  const showProfile =()=>{
    const profileView=document.querySelector('.profile') 

    if (profileView.className !== 'profile popout') {
      profileView.classList.remove("popin")
      profileView.classList.add("popout");

  } else {
    profileView.classList.remove("popout")
    profileView.classList.add("popin");
  }
  
  }

  useEffect(() => {
     let path = (new URL(document.location)).pathname; 
    setIsProfile(path)
    if(isProfile==="/profile"){
        showProfile()
    }
    
    });


    useEffect(() => {
      //  console.log(user.user.username)

        setUsername(user.user.username)
        setEmail(user.user.email)
        setPassword(user.userpassword)
    }, [user])


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
    const onAdress1Change = (e) => {
        const adress1 = e.target.value;
        setAdress1(adress1);
    };
    const onAdress2Change = (e) => {
        const adress2 = e.target.value;
        setAdress2(adress2);
    };
    const onAdress3Change = (e) => {
        const adress3 = e.target.value;
        setAdress3(adress3);
    };
    const onPostalcodeChange = (e) => {
        const postalcode = e.target.value;
        setPostalcode(postalcode);
    };
    const onCityChange = (e) => {
        const city = e.target.value;
        setCity(city);
    };
 
    
    //change profile settings
    const changeSettings = (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll('.profile  input')

        if (inputs[0].className === "") {
            setInputDisabled(false)
            inputs.forEach(input => {
                input.classList.add("inputEnabled");
                input.disabled = {inputDisabled}
            });

        } else {
            inputs.forEach(input => {
                setInputDisabled(true)
                input.classList.remove("inputEnabled")
                input.disabled = {inputDisabled}

            });
        }

    }

    const handleSumbit = (e) => {
        console.log("wuu")
    }

    //return BMI type
    const whatTheBMI = (bmi) => {
        if (isNaN(bmi))
            return { __html: `<span class="normal"></span>` };
        if ( bmi < 18.6)
            return { __html: `<span class="under">your BMI is ${bmi}<br> what do you call a thin T-Rex?<br>Ano-Rex...</span>` };
        else if (bmi >= 18.6 && bmi < 24.9)
            return { __html: `<span class="normal">your BMI is ${bmi} <br>You must be working out</span>` };
        else if (bmi >= 24.9 && bmi < 29.9)
            return { __html: `<span class="over">your BMI is ${bmi} <br><strong>Fatty Fatty boom-batty</strong></span>` };
        else
        return { __html: `<span class="obese">your BMI is ${bmi} <br><strong>You’re so fat, even Thanos couldn’t wipe you.</strong></span>` }; 
    }

    return (
        <div className="profileWrap">
        <div className="profile">
          <Profileavatar/>

          <div className="profile_formWrap">
            <form onSubmit={handleSumbit}>
                <div className="name">
                <input
                    id='name-input'
                   
               
                    type='text'
                    placeholder={"username: " + username}
                    onChange={onNameChange}
                    value={username}
                    disabled={inputDisabled}
                />
            </div>
            <div className="email">
                <input
                    id='email-input'
                    
             
                    type='email'
                    placeholder={"Email: " + email}
                    onChange={onEmailChange}
                    value={email}
                    disabled={inputDisabled}
                />
            </div>
            <div className="password">
                <input
                    id='password-input'
                    
                    type='password'
                    placeholder={"password:"}
                    onChange={onPasswordChange}
                    value={password}
                    disabled={inputDisabled}
                />
             </div>
             <div  className="adress1">
                <input
                    id='adress1'
                   
                    type='txt'
                    placeholder={"adress:"}
                    onChange={onAdress1Change}
                    value={adress1}
                    disabled={inputDisabled}
                />
                </div>
                <div className="adress2">
                <input
                    id='adress2'
                    
                    type='txt'
                    placeholder={"adress:"}
                    onChange={onAdress2Change}
                    value={adress2}
                    disabled={inputDisabled}
                />
                </div>
                <div className="adress3">
                <input
                    id='adress3'
                    
                    type='txt'
                    placeholder={"adress:"}
                    onChange={onAdress3Change}
                    value={adress3}
                    disabled={inputDisabled}
                />
                </div>
                <div className="postalcode">
                <input
                    id='postalcode'
                    
                    type='txt'
                    placeholder={"postalcode:"}
                    onChange={onPostalcodeChange}
                    value={postalcode}
                    disabled={inputDisabled}
                />
                </div>
                <div className="city">
                <input
                    id='city'
                    
                    type='txt'
                    placeholder={"city:"}
                    onChange={onCityChange}
                    value={city}
                    disabled={inputDisabled}
                />
                </div>    

                <div className="submit">
                <button className="PCTA"
                    onClick={changeSettings}
                >change settings</button>
                </div>
            </form>
            </div>
            <RangeSlider {...sliderHeight} className="slider" />
            <RangeSlider {...sliderWeight} className="slider" />
            <div className="bmi" dangerouslySetInnerHTML={whatTheBMI(BMI)} />
        </div>
        </div>
    );

}

export default Profile