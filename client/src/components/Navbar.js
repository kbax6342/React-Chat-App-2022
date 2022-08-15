import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";
import LogOut from "./LogOut";
import SignIn from "./SignIn";
const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};
export default function Navbar() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn></SignIn>}
    </div>
  );
}
