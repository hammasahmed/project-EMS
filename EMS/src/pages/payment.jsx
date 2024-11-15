import React,{useState} from "react";
import axios from "axios"

function Payment() {
    const [color,SetColor] = useState("blue")
    
    const HandleSubmit = () => {
      try{
        axios.post("http://localhost:5000/api/payment").then((response) => {
          console.log(response.data);
        }).then((error) => console.error(error));
      }catch (error) {
        alert("Error", error);
      }
    }
  return <div>
    <h1>Payment Page</h1>
    <button type="submit" className="bg-blue-500 mt-2 px-5 rounded-lg   w-64 h-10"
    style={{ backgroundColor: {color} }}
    onClick={()=>{
      SetColor("red")
      HandleSubmit();
    }}
    
    >JAZZ CASH Payment</button>

  </div>;
}

export default Payment;
