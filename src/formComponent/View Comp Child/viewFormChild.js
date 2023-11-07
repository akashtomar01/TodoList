// import React from "react";
// import { dataFromParent } from "../signUp/signupForm";
import { createContext, useState } from "react";

let dataOfChild = createContext();
let ViewFormChild = () =>{
    // let DataFromParent = useContext(dataFromParent);
    // console.log("Data from parent .....",DataFromParent);
    let [inputField,setInputField] = useState({firstname:'',lastname:'',email:'',phone:'',address:''});
    let submitFunc = (e) =>{
        let {name,value} = e.target;
        setInputField({...inputField,[name]:value});
        console.log("submitdata.......",name,value);
    }
    return(
        <div>
            <h3>Child Component of View Form Which is get the data from parent of child Component through Context hook</h3>
            <form>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name='firstname' onChange={submitFunc}/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastname" onChange={submitFunc}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email"name="email" onChange={submitFunc}/>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" onChange={submitFunc}/>
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="textarea" name="address" onChange={submitFunc}/>
                    </div>
            </form>
        </div>
    )
    
}

export default ViewFormChild;
export {dataOfChild};