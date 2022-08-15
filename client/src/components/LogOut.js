import React from "react";
import { auth } from "../Firebase";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

export default function LogOut() {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <div
      className={style.button}
      onClick={() => {
        auth.signOut();
      }}
    >
      LogOut
    </div>
  );
}
