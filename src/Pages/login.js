
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, db } from "../firebase";
import {set,ref} from "firebase/database";
import { useState } from "react";
const Login = () =>{


    const [visible,setVisible] = useState(false);


    const googleLogIn=()=>{
        var provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then((credential)=>{
            console.log(credential.user);
            const data = {
                name : credential.user.displayName ,
                email : credential.user.email ,
                photoURL : credential.user.photoURL,
                uid: credential.user.uid,
            }
            set(ref(db,"users/"+credential.user.uid),data).then(()=>{
                alert('succesfully')
            }).catch(error=>console.log(error))
             }).catch(error=>{
                console.log(error.message)
             })
    }

    return <>
    <div className="flex justify-center items-center w-screen h-screen bg-center" style={{ backgroundImage: "url(../img/bg.png)"}}>
        <div className="flex flex-col items-center gap-2 backdrop-blur-sm bg-[#e9dae4e0] py-10 px-4 border-2 border-slate-200 rounded-lg">
            <span className=" w-96 px-8 py-2">
            <label htmlFor="nameInput" className=" mr-2 flex justify-between font-semibold text-slate-700"> Name : </label>
            <input className=" w-72 h-10 pl-2 shadow-sm rounded-sm border-b-2 border-slate-600 bg-transparent focus:outline-none" placeholder="Enter Your Name" id="nameInput"/>
            </span>
            <span className="w-96 px-8 py-2">
            <label htmlFor="nameInput" className=" mr-2 flex justify-between font-semibold text-slate-700"> Email : </label>
            <input className="w-72 h-10  pl-2 shadow-sm rounded-sm border-b-2 border-slate-600 bg-transparent focus:outline-none" placeholder="example@mail.com" id="emailInput"/>
            </span>
            <span className="w-96 px-8 py-2">
            <label htmlFor="nameInput" className=" mr-2 flex justify-between font-semibold text-slate-700"> Password : </label>
            <input type={visible===false?"password":"text"} className="w-72 h-10  pl-2 shadow-sm rounded-sm border-b-2 border-slate-600 bg-transparent focus:outline-none" placeholder="********" id="passwordInput"/>
            {visible===false? <span onClick={()=>{setVisible(true)}}><i class="fi fi-sr-eye-crossed"></i></span>
            : <span onClick={()=>{setVisible(false)}}><i class="fi fi-sr-eye"></i></span>
            }
            </span>
            <span><span className="text-md">Already have an account ?</span> <span className="font-semibold text-md select-none cursor-pointer">Click here</span></span>
            <span className="w-96 px-8 py-2 flex justify-center">
                <button className="btn bg-cyan-900 text-slate-200 px-24 py-2 rounded-md">Sign Up</button>
            </span>
            <span className="w-96 px-8 py-2 flex justify-center">
             <button onClick={()=>{googleLogIn()}} className="btn bg-[#7884bc] text-cyan-100 font-semibold px-16 py-2 rounded-md">Login by Google</button>
            </span>
        </div>
        
    </div>
    </>
}

export default Login;