import {useEffect,Redirect,useState } from 'react'
import Dashboard from './Dashboard'
import '../CSS/Rolechecker.css'

export default function RoleCheck(props) {
  
  console.log("props from profile")
  console.log(props)
  const curUser=props.currentUser;
  console.log(curUser)

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
  
   if(!props.currentUser) return <Redirect to='/login' component={ RoleCheck } currentUser={ props.currentUser } />
  return (
    <div className="RoleWrap">
      <Dashboard className="cal"/>
      <div>
      {showUserContent &&(<div>Hello {curUser.user.username}</div>)}
      {showContributerContent &&(<div>Hello Contributer</div>)}
      {showAdminContent &&(<div>Hello Admin</div>)}
      <h5>your email is {curUser.user.email}</h5>
      </div>
    </div>
  )
}