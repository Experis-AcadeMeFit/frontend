import {useEffect,Redirect,useState } from 'react'


export default function Profile(props) {
  
  const curUser=props.currentUser;

  const [showUserContent, setshowUserContent] = useState(false);
  const [showContributerContent, setShowContributerContent] = useState(false);
  const [showAdminContent, setShowAdminContent] = useState(false);

  useEffect(() => {
    const privateMessage = async function() {
      try {
        setshowUserContent(curUser.user.roles.includes("ROLE_USER"))
        setShowContributerContent(curUser.user.roles.includes("ROLE_CONTRIBUTOR"));
        setShowAdminContent(curUser.user.roles.includes("ROLE_ADMIN"));

       

      } catch(error) {
        console.log(error)
    
      }
    }
  
    privateMessage()
  }, [curUser, props])
  
   if(!props.currentUser) return <Redirect to='/login' component={ Profile } currentUser={ props.currentUser } />
  return (
    <div>
      <h4>hello </h4>
      <h5>your email is {props.currentUser.user.email}</h5>

      <div>
      {showUserContent &&(<div>Hello User</div>)}
      {showContributerContent &&(<div>Hello Contributer</div>)}
      {showAdminContent &&(<div>Hello Admin</div>)}
      </div>
    </div>
  )
}