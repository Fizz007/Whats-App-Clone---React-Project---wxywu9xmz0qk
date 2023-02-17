import React, { useContext } from "react";
import "./chatscreen.css";
import { FiPhone } from "react-icons/fi";
import Chats from "./Chats";
import store from "../../Store/ContextData";

const ChatScreen = () => {
  const { activeUsers } = useContext(store);
  return (
    <div className="chatScreen">
      {activeUsers === "" ? (
        <div className="div-icon">
          <div style={{ padding: "4rem" }} className="ficon">
            <FiPhone className="phone-icon" />
          </div>
          <p style={{ color: "white" }}>Click On Chats To See Messages</p>
        </div>
      ) : (
        <Chats />
      )}
    </div>
  );
};

export default ChatScreen;
