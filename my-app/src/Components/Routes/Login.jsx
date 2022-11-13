import { useContext, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

// import Loader from "./Loader";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);
  const {loginUser} = useContext(AuthContext);
  // console.log(authState)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email !== "" && password !== "")
        {
        //   setLoading(true);
          fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({email, password})
          })
          .then(res=>res.json())
          .then(res=>{
            if(res.token)
            {
              loginUser(res.token)
              navigate("/")
            //   
            //   setLoading(false)
            }
          })
          .catch(err=>{
            //   setLoading(false)
          })
        }
      }
//     //   if(loading)
//     //   {
//     //     return <Loader/>
//     //   }

  // Return Statement------------------------------------
  return (
    <div style={{width:"430px", margin:"5vh auto", padding:"2vh 3vw", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
   <h1 style={{textAlign:"center"}}>
    <img src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/314742126_3414808192075939_2139891738767372054_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=E1mS6W-zs8IAX-dfdNF&_nc_ht=scontent.fccu31-1.fna&oh=00_AfDynkdfANuRKJL05ZqZvluIBmVTRXu1oYRrYbnmPEwIFg&oe=6375B9AB" alt="Error" />
   </h1>
    <h1 style={{fontSize:"32px", textAlign:"center", margin:"2vh 0 8vh 0"}}>Log In</h1>
      <form 
      onSubmit={handleSubmit}
      >
        <div style={{display:"flex", justifyContent:"space-between",}}>
            <label style={{marginTop:"1vh"}}>Email</label>
            <input
                style={{border:"1px solid", width:"80%", padding:"1vh"}} 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                placeholder="email"
            />
        </div>
        <div style={{display:"flex", justifyContent:"space-between", margin:"2vh 0"}}>
            <label style={{marginTop:"1vh"}}>Password</label>
            <input
                style={{border:"1px solid", width:"80%", padding:"1vh"}}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="password"
            />
        </div>
        <div>
          {/* --------------Submit Button----------- */}
             <input 
                style={{display:'block', margin:'5vh auto', width:"100%", backgroundColor:"orange", color:"black", fontSize:"18px", padding:"1.6vh 0", borderRadius:"5px", cursor:"pointer"}}
                type="submit" 
                value="SUBMIT" 
            />
        </div>
      </form>
      <div style={{textAlign:"center"}}>
        <Link style={{color:"black", textDecoration:"underline"}} to="/">Go Back</Link>
      </div>
    </div>


  );
}
export default Login;


