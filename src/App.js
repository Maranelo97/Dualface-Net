import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {login, logout, selectUser } from './features/userSlice'


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email
        })
        );
      }else {
        //Logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])


  return (
  
   <div className='app'>
    <Router>
    {!user ?  
    <LoginScreen /> :
    <Routes>
    <Route path='/' element={<HomeScreen />} />
    
    
    <Route path='/profile' element={<ProfileScreen />} />

    </Routes>
  }
   
    </Router>
   </div>
   )
  }


export default App;
