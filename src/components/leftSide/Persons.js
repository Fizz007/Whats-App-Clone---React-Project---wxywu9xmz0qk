import React, { useContext, useEffect, useState } from "react";
import DUMMYDATA, { personData } from "../../Data/DemoData";
import "./persons.css";
import store from "../../Store/ContextData";


const Persons = (props) => {

  const { activeUsers,setActiveUser,givenMessages,setGivenMessages }=useContext(store);

  function chatBox(id){
    console.log(id)
    setActiveUser(id);
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(personData);
    // console.log(personData);
    console.log(conversation1);
console.log(conversation2);
// console.log(props.search);
  }, []);  
  const chat=[...givenMessages];
  const conversation1=chat[0].messages;
  const conversation2=chat[1].messages;


  let arr=[];
  if(!props.search){
    arr = data.map((ele) => {      
      return (
        <div className={`users ${ele.id===activeUsers?'active-user':''}`} key={ele.id} onClick={()=>chatBox(ele.id)} >
          <img src={ele.img} className="list-image" />
          <span>{ele.name}</span>
          <ul>
          {
            ele.id===activeUsers?<></>:<li className="number-of-message" >
            {
              ele.id==='varun'|| ele.id==='anuj' ? conversation1.filter((e)=>ele.id!==e.from).length:          
              ele.id==='sarah'|| ele.id==='john' ? conversation2.filter((e)=>ele.id!==e.from).length:0
            }
            
          </li>
          }
          </ul>
        </div>
      );
    
    
          });
          // console.log(arr);
  }else{
    // if(conversation1.find((e)=>e.from===props.search)){
    //   console.log(props.search);
      arr=data.filter((ele)=>ele.name.toLowerCase().includes(props.search.trim().toLowerCase()));
      arr=arr.map((ele)=>{
        return (
          <div className="users" key={ele.id}>
          <img src={ele.img} className="list-image" />
          <span>{ele.name}</span>
          <ul>
          <li className="number-of-message">
            {
              ele.id===props.search ? conversation1.filter((e)=>ele.id!==e.from).length:''          
            }
            
          </li>
          </ul>
        </div>
        )
      })
      // console.log(arr);
    // }else{
    //   console.log(props.search);
    //   arr=data.filter((ele)=>ele.id===props.search)
    //   arr=arr.map((ele)=>{
    //     return (
    //       <div className="users" key={ele.id}>
    //       <img src={ele.img} className="list-image" />
    //       <span>{ele.name}</span>
    //       <ul>
    //       <li className="number-of-message">
    //         {
    //           ele.id===props.search ? conversation2.filter((e)=>ele.id!==e.from).length:''          
    //         }
            
    //       </li>
    //       </ul>
    //     </div>
    //     )
    //   })
    // }
    // arr = data.filter((ele) => {
    //   if(conversation1.from===ele.id)
    //   return (
    //     <div className="users" key={ele.id}>
    //       <img src={ele.img} className="list-image" />
    //       <span>{ele.name}</span>
    //       <ul>
    //       <li className="number-of-message">
    //         {
    //           ele.id==='varun'|| ele.id==='anuj' ? conversation1.filter((e)=>ele.id!==e.from).length:<></>
    //         }
            
    //       </li>
    //       </ul>
    //     </div>
    //   );
    // });
  }
  return <div className="display-users">{arr}</div>;
};

export default Persons;
