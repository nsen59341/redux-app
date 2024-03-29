import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../redux/userSlice';
import { fetchUserMiddleWare } from '../middleware/fetchUserMiddleWare';

const action = userSlice.actions;
export default function UserReduxComponent() {

    const [val, setVal] = useState(1);

    const {user, loading, error, param} = useSelector((store)=>{
      return store.userState
    });

    const dispatch = useDispatch();

    useEffect(() => {
      (async function () 
      {

        if(param != null){
          dispatch(fetchUserMiddleWare(param));
        }
  
      }());

    },[param]);


    const handleParam = () => {
      dispatch(action.setParam(val));
    } 


    if(loading) {
      return <>
          <h2>Loading...</h2>
        </>
    }
    const heading = <>
      <h2>The User Data</h2>
      <input type="text" 
      value={val} 
      onChange={(e) => {setVal(e.target.value) }} />
      <button onClick={handleParam}>click</button>
    </>

    if(user!=null) {
      return <>
      {heading}
      <h4>Name: {user.name}</h4>
      <h4>User Name: {user.username}</h4>
      <h4>Email Id: {user.email}</h4>
      <h4>Phone Number: {user.phone}</h4>
      </>
    }

}
