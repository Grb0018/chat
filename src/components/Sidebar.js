import {useEffect} from "react";
import { db } from "../firebase";
import { ref,set } from "firebase/database";

const Sidebar = (props)=>{

    // useEffect(()=>{
    //     set(ref(db,"user/"))
    // },[])
    return <>
    <div className="flex flex-col justify-start items-center w-1/6 max-h-full min-h-screen overflow-x-hidden bg-gray-50">
        <span className="text-center">List</span>
        {props.userList.map((user,i)=>{
            return  <span className="flex flex-row justify-center w-full my-4 bg-slate-200 py-1 rounded-xl shadow-sm" key={i}>
                    <span className="w-1/5 text-slate-700 flex justify-start mx-2 items-center">
                        <span className="rounded-[50vw] bg-orange-200 px-4 py-2 select-none">{user.displayName.slice(0,1)}</span></span>
                    <span className="flex flex-col w-4/5">
                        <p className="text-left font-semibold text-slate-800">{user.displayName}</p>
                        <span className="text-left text-sm text-slate-600">Message</span>
                    </span>
                    </span>
        })}

    </div>
    </>
}

export default Sidebar;