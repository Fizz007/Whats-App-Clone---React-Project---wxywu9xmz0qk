import React, { useState } from "react";
import DUMMYDATA from "../Data/DemoData";
const store=React.createContext(
    {
        activeUsers:"",
        givenMessages:[],
        setGivenMessages:()=>{},
        setActiveUser:(userName)=>{},        
    }
);

export function ContextData(props){
    const [activeUsers,setActiveUsers]=useState('');
    const [givenMessages,setGivenMessage]=useState(
        JSON.parse(localStorage.getItem("token"))||DUMMYDATA
    );

    function setGivenMessages(obj){
        // setGivenMessage();
        console.log(obj);
        if(obj.from==='varun'||obj.from==='anuj'){
            const newData=givenMessages[0].messages;
            newData.push(obj);
            setGivenMessage([{messages:newData},givenMessages[1]])
            localStorage.setItem("token",JSON.stringify([{messages:newData},givenMessages[1]]))
        }else{
            const newData=givenMessages[1].messages;
            newData.push(obj);
            setGivenMessage([givenMessages[0],{messages:newData}])
            localStorage.setItem("token",JSON.stringify([givenMessages[0],{messages:newData}]));
        }
    }
    function setActiveUser(userName){
        setActiveUsers(userName);
    }
    return (
        <store.Provider value={{activeUsers,setActiveUser,givenMessages,setGivenMessages}} >
            {props.children}
        </store.Provider>
    )
}

export default store;