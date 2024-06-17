import DriveHeader from "../components/DriveHeader";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
// import { signOut } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { addUser, removeUser } from "../store/userSlice";
// import { auth } from "../firebase/Firebase";

const DrivePage = () => {
  const user = useSelector((appStore) => appStore.user);
  const [inputval, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const authStateChange = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, email, photoURL} = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
      } else {
        console.log("user not found");
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => authStateChange();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("Sign Out Sucessfully")
      })
      .catch((err) => {
        navigate("/error");
        throw new Error(err);
      });
  };

    if(!user) return <div><div className="loader"></div></div>
    const {photoURL, uid} = user;

    const val = {
      inputval, setInput
    }

  return (
    <div>
      <DriveHeader photoURL={photoURL} handleSignOut={handleSignOut} val={val}/>
      <div className="flex justify-between items-center relative">
        <LeftSection uid={uid}/>
        
        <RightSection uid={uid} val={val}/>
      </div>
    </div>
  );
};

export default DrivePage;
