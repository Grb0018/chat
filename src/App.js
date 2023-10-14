
import { useEffect, useState } from 'react';
import './App.css';
import { auth } from './firebase';
import Sidebar from './components/Sidebar';
import { onAuthStateChanged } from 'firebase/auth';
import { getMembers } from './Redux/reduxSlice';
import { useDispatch } from 'react-redux';
import Rightbar from './components/Rightbar';

function App() {
const[userlist,setUserlist]=useState([])
const dispatch = useDispatch();
useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    const data = [{
      id : user.uid,
      displayName : user.displayName,
      email : user.email,
    }]
    dispatch(getMembers(data));
    setUserlist([...data])
  },error=> console.log(error))
  },[])

  return (
    <div className="App">
      <div className='flex flex-row items-start'>
      <Sidebar userList={userlist}/>
      <Rightbar />
      </div>
    </div>
  );
}

export default App;
