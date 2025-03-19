import Navbar from './components/Navbar';
import{ Routes, Route } from "react-router-dom";
import HomePage from './pagess/HomePage';
import SignUpPage from './pagess/SignUpPage';
import LoginPage from './pagess/LoginPage';
import SettingsPage from './pagess/SettingsPage';
import ProfilePage from './pagess/ProfilePage';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import { Loader } from "lucide-react";
import {Toaster} from "react-hot-toast";

const App = () => {
  const {authUser,checkAuth,isCheckingAuth,onlineUsers}= useAuthStore();

  useEffect(() => {
    checkAuth();
  }
  ,[checkAuth]);
console.log({authUser});

if(isCheckingAuth && !authUser)return(
  <div className="felx items-center justify-center h-screen">
   <Loader className = "size-10 animate-spin"/>
  </div>
);



  return(
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/"/>} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/"/>} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage/> : <Navigate to="/login"/>} />
      </Routes>

       <Toaster/>



    </div>
  )
};

export default App;