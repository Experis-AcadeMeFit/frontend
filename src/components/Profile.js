
import { useState, useEffect, useCallback, useMemo } from "react"
import Profileavatar from './ProfileAvatar'
import RangeSlider from './Slider';
import '../CSS/Profile.css'
const Profile = (props) => {

    //Can change--
    const [inputDisabled, setInputDisabled] = useState(true)
  //  const [avatar, setAvatar] = useState();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*TODO */
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
        <div className="profile">
          <Profileavatar/>
            <form onSubmit={handleSumbit}>

                <input
                    id='name-input'
                    type='text'
                    placeholder={"username: " + username}
                    onChange={onNameChange}
                    value={username}
                    disabled={inputDisabled}
                />

                <input
                    id='email-input'
                    type='email'
                    placeholder={"Email: " + email}
                    onChange={onEmailChange}
                    value={email}
                    disabled={inputDisabled}
                />

                <input
                    id='password-input'
                    type='password'
                    placeholder={"password:"}
                    onChange={onPasswordChange}
                    value={password}
                    disabled={inputDisabled}
                />

                <button className="CTA"
                    onClick={changeSettings}
                >change settings</button>
            </form>

            <RangeSlider {...sliderHeight} className="slider" />
            <RangeSlider {...sliderWeight} className="slider" />
            <div className="bmi" dangerouslySetInnerHTML={whatTheBMI(BMI)} />
        </div>
    );

}

export default Profile