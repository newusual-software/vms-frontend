import React, { useState } from "react";
import Input from "../../components/atoms/input";
import AuthLayout from "../../layout/authLayout";
import { 

  UserIcon, 
  ContactIcon 

} from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { FaEye as EyeIcon, FaEyeSlash as EyeOffIcon } from 'react-icons/fa';


export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [remember, setRemember] = useState(true);
  let navigate = useNavigate();

  const validateForm = () => {
    let isValid = true
    if ( email == '' || password == '' ) {
      isValid = false
      alert('invalid credential')
    }

    return isValid
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {

    if (validateForm()) {

      // signInWithEmailAndPassword(
      //   auth,
      //   email,
      //   password
      // )
      //   .then(async() => {
      //     alert('success')
      //     // const user = userCredential.user;
      //     // let useId = user.uid;
      //     navigate("/adminDashboard");
                        

      //   })
      //   .catch((err) => {
      //     alert(err)
      //   })
    }
  }
  return (
    <div>
      <AuthLayout
        heading={"Sign in as an Admin!"}
        subHeading={"Enter your username and password"}>
        <form action="" method="post"  onSubmit={(e)=>{
          e.preventDefault();
          handleSubmit();
        }}>

          <div>
            <div className="w-full">
              <Input className={"my-8"} label={"email address"} icon={ContactIcon} type={"email"} placeholder={"Email Address"} value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="w-full relative">
              <Input
                className={"my-8"}
                label={"password"}
                icon={UserIcon}
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-2 right-2 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            <div className="flex my-4 justify-start items-center gap-2">
              <div>
                <input type="checkbox" value={remember} onChange={e => setRemember(e.target.value)}/>
              </div>
              <div className="font-dmSan text-[#141414] font-400 text-md">Remeber my password</div>
            </div>                              
            <div className="flex justify-center items-center ">
              <button type="submit" className="bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg ">Login</button>
            </div>
            <div className=" text-center py-4">
              <Link className="font-roboto text-[#828282] underline text-md font-normal">Forgot Password?</Link>
            </div>
          </div>
          <div className="font-roboto text-[#828282] text-2xl flex justify-end items-end font-bold">
            <h2>ADMIN</h2>
          </div> 
        </form>
                    
      </AuthLayout>
    </div>
  );
}
