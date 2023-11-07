import { useRef, useState } from "react";
import LoginForm from "../Login form/loginForm";

let ParentLoginForm2 = () =>{
    console.log("Parent Data...");

    let [childData,setChildData] = useState({});
    
    let getData = useRef();
    
    getData = (data) =>{
        setChildData(data);
        // console.log('data of useref',data);
    }

    return (
        <div>
            <h1>Parent Component of form</h1>
            <h5>Name: {childData.username}</h5>
            <h5>Email: {childData.email}</h5>
            <h5>Phone Number: {childData.phone}</h5>
            <h5>Password: {childData.password}</h5>
            <h5>Re-Password: {childData.repassword}</h5>
            <hr></hr>
            <LoginForm recieveData={getData} />
            {/* validateFieldProp={validateField} */}
        </div>
    );
}

export default ParentLoginForm2;