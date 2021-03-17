import React, { Fragment, useState, useEffect } from "react";

import UserService from "../../services/user.service";
import '../CSS/LandingPage.css'


const LandingPage = () => {
    const [content, setContent] = useState();

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                console.log(response.data.message)
                setContent(response.data.message);
            },
            (error) => {
                const _content = [(error.response && error.response.data) || error.message || error.toString()];
                console.log(_content)
                setContent(_content);
            }
        );
    }, []);

    return (
        <Fragment>
            <div style={{ backgroundImage: "url(/images/garrett-butler-unsplash.jpg)" }} className="landingPageBG">
              <div>
             <h3>{content}</h3>


              
              </div>


            </div>

        </Fragment>
    )

}
export default LandingPage;