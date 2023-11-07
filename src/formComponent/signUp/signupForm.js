// import { useState } from "react";
import { createContext, useEffect, useState } from "react";
import TextComponent from "../Text Component/textComponent";
import ViewForm from "../viewForm/viewForm";

let dataFromParent = createContext();
const SignUpForm = () =>{
    // console.log("window power",window)
    let [windowStatus,setWindowStatus] = useState(false);
    console.log('fjdfjhdjhfjdhfdhfjhd',windowStatus);
    
    // let [count,setCount] = useState(0);
    // let addCount = () =>{
    //     setCount(count + 1);
    // }
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `${count} times`;
    //   },[count]);
    // setTimeout(()=>{
    //     setCount(count+1);
    // },1000)
    
    // useEffect(()=>{
    //     window.alert("Component is initialised");
    // },[window])

    useEffect(()=>{
        return() =>{
            if(window.close()){
                setWindowStatus(true);
                alert("Are you sure want to leave this page");
                console.log('fjdfjhdjhfjdhfdhfjhd',windowStatus);
            }
        }
    },[windowStatus]);


    let [inputField,setInputField] = useState({firstname:'',lastname:'',email:'',phone:'',address:''});
    // console.log("phoneNumber...........",inputField);
    let submitFunc = (e) =>{
        let {name,value} = e.target;
        setInputField({...inputField,[name]:value});
        console.log("submitdata.......",name,value);
    }    
    return (
        <div>
        <h3>Parent Component</h3>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstname" onChange={submitFunc}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastname" onChange={submitFunc}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={submitFunc}/>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" onChange={submitFunc}/>
                </div>
                <div>
                    <label>Address:</label>
                    <textarea name="address" onChange={submitFunc}/>
                    {/* <input type="areatext" name="address" onChange={submitFunc}/> */}
                </div>
                {/* <div>
                    <button onClick={submitFunc}>Submit</button>
                </div> */}
            </form>
            {/* <h1>Hello React</h1>
            <button onClick = {addCount }>
                click for count
            </button>
            {count} */}
            <div>
                <TextComponent />
            </div>
            <div>
            <dataFromParent.Provider value={inputField}>
                <ViewForm {...inputField}/>
            </dataFromParent.Provider>
                
            </div>
        </div>
    );
}

export default SignUpForm ;
export {dataFromParent};