import React, { useContext, useEffect, useRef, useState } from "react";
import store from "../../Store/ContextData";
import DUMMYDATA, { personData } from "../../Data/DemoData";
import "./chats.css";
import { BiSend } from "react-icons/bi";

const Chats = () => {
  const { activeUsers, setActiveUser, givenMessages, setGivenMessages } =
    useContext(store);
  let chats = givenMessages;

  const inpRef = useRef();

  function handleChange() {
    if (inpRef.current.value.trim() === "") {
      return;
    }
    setGivenMessages({
      message: inpRef.current.value,
      from: activeUsers,
    });
    inpRef.current.value = "";
  }

  function handleChangee(e) {
    if (e.key === 'Enter') {
      if (inpRef.current.value.trim() === "") {
        return;
      }
      setGivenMessages({
        message: inpRef.current.value,
        from: activeUsers,
      });
      inpRef.current.value = "";
    }
  }

  let aray = [];
  const idx = activeUsers == "varun" || activeUsers == "anuj" ? 0 : 1;
  const imag = personData.find((e) =>
    e.id === activeUsers.toLowerCase() ? e : null
  );
  aray = chats[idx].messages.map((ele) => {
    return (
      <div className="chat-wrapper" key={Math.random()}>
        {ele.from === activeUsers ? (
          <>
            <div className="active-user">{ele.message}</div>
          </>
        ) : (
          <>
            <div className="non-active-user">{ele.message}</div>
          </>
        )}
      </div>
    );
  });
  return (
    <div className="user-profile">
      <div className="img-name">
        <img src={imag.img} />
        <span>{imag.name}</span>
      </div>
      <div className="display-message">{aray}</div>
      <div className="input-message">
        <input type="text" placeholder="Message" ref={inpRef} onKeyDown={handleChangee} />
        <span onClick={() => handleChange()} >
          <BiSend className="send-icon" />
        </span>
      </div>
    </div>
  );
};

export default Chats;
