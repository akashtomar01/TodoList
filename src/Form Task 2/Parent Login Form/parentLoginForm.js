import {useState,useRef} from "react";
import LoginForm from "../Login form/loginForm";

const ParentLoginForm = () =>{
    // console.log("Parent Data...");

    let [formInput,setFormInput] = useState({username:'',email:'',phone:'',password:'',repassword:''});
    let [childData,setChildData] = useState({});
    // let [passValidation,setPassValidation] = useState(false)
    let [usernameErr,setUserNameErr] = useState('');
    let [emailErr,setEmailErr] = useState('');
    let [phoneErr,setPhoneErr] = useState('');
    let [passwordErr,setPasswordErr] = useState('');
    let [repasswordErr,setRepasswordErr] = useState('');

    let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^[0-9]+$/
    
    let getInput = useRef();

    getInput = (name,value) =>{
        setFormInput({...formInput,[name]:value});
        console.log("input Data",formInput);
    }
    
    let onSubmitFun = (event)=>{
        event.preventDefault();
            validateField();
                if(validateField() === true){
                    setChildData(formInput);
                }
    }

    let validateField = () =>{
        let formValidation = false;

        if(formInput.username === ''){
            setUserNameErr('Name is required');
            formValidation = true;
        }else{
            setUserNameErr('');
        }
        
        // email validation
        if(formInput.email === ''){
            setEmailErr('Email is required')
            formValidation = true
        }else if(!formInput.email.match(emailRegex)){
            setEmailErr('Inavalid Email')
            formValidation = true
        }
        else{
            setEmailErr('');
        }

        //Phone number validation 
        if(formInput.phone === ''){
            setPhoneErr('Phone is required');
            formValidation = true
        }else if(!formInput.phone.match(phoneRegex)){
            setPhoneErr('Invalid Phone Number');
            formValidation = true
        }else{
            setPhoneErr('');
        }

        //password validation 
        if(formInput.password === ''){
            setPasswordErr('Password is required');
            formValidation = true
        }else if(formInput.password.length <8){
            setPasswordErr('Password contains minimum 8 characters');
            formValidation = true
        }else{
            setPasswordErr('');
        }

        //re password validation
        if(formInput.repassword === ''){
            setRepasswordErr('Re-password is required');
            formValidation = true
        }else if(formInput.repassword !== formInput.password){
            setRepasswordErr('Re-password is mismatch');
            formValidation = true
        }else{
            setRepasswordErr('');
        }
        return !formValidation
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
            <LoginForm 
            getInputData = {getInput} 
            usernameErr = {usernameErr}
            emailErr = {emailErr}
            phoneErr = {phoneErr}
            passwordErr = {passwordErr}
            repasswordErr = {repasswordErr}
            onSubmit = {onSubmitFun}
            />
        </div>
    );
}

export default ParentLoginForm;