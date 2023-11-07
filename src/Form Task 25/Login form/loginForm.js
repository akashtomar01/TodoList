import { useEffect, useState } from 'react';
import './loginform.css'

let LoginForm = (props) =>{
    
    let [formInput,setFormInput] = useState({username:'',email:'',phone:'',password:'',repassword:''});
    // let [validationError,setValidationError] = useState({usernameErr:'',emailErr:'',phoneErr:'',passwordErr:'',repasswordErr:''});
    let [usernameErr,setUserNameErr] = useState('');
    let [emailErr,setEmailErr] = useState('');
    let [phoneErr,setPhoneErr] = useState('');
    let [passwordErr,setPasswordErr] = useState('');
    let [repasswordErr,setRepasswordErr] = useState('');
    let [allowSendData,setAllowSendData] = useState(false);
    // let [finalData,setFinalData] = useState({});
    // console.log("current form data...first render",validationError);

    let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^[0-9]+$/
    console.log("..................",allowSendData);
    let getInput = (event) =>{
        let {name,value} = event.target;
        setFormInput({...formInput,[name]:value});
        // validateField()
    }
    // useEffect(()=>{
    //     if(usernameErr=='' && emailErr=='' && phoneErr=='' && passwordErr=='' && repasswordErr==''){
    //         setAllowSendData(true)
    //         console.log('hellooooooosvcsdgvcgd');
    //     }
    // },[formInput])

    let validateField = () =>{
        // console.log('validate fun run',formInput.username);
        // console.log("name",abc.target);
        // let {usernameErr, emailErr, phoneErr, passwordErr, repasswordErr} = validationError;
        // if (!usernameErr && !emailErr && !phoneErr && !passwordErr && !repasswordErr) {
            // setAllowSendData(false);
            // if(usernameErr!=='' && emailErr!=='' && phoneErr!=='' && passwordErr!=='' && repasswordErr!==''){
            if(formInput.username == ''){
                    setUserNameErr('Name is required')
                    // setAllowSendData(false)
                }else{
                    setUserNameErr('')
                    // setAllowSendData(true)
                }

                // setValidationError({...validationError,usernameErr:'Name is required'});
                // console.log(validationError);
                // console.log('.....and error message...',[usernameErr]);
            //    setValidationError({...validationError,[usernameErr]:'Name length should be less than 10'});
            // }else{
            //     setValidationError({...validationError,usernameErr:''});
            // }
            
            // email validation
            if(formInput.email == ''){
                setEmailErr('Email is required')
                // setAllowSendData(false)
            //     setValidationError({...validationError,emailErr:'Email is required'});
            // }else{
            //     setValidationError({...validationError,emailErr:''});
            }else if(!formInput.email.match(emailRegex)){
                setEmailErr('Inavalid Email')
                // setAllowSendData(false)
            }
            else{
                setEmailErr('')
                // setAllowSendData(true)
            }

            //Phone number validation 
            if(formInput.phone == ''){
                setPhoneErr('Phone is required')
                // setAllowSendData(false)
            //     setValidationError({...validationError,phoneErr:'Phone number is required'});
            // }else{
            //     setValidationError({...validationError,phoneErr:''});
            }else if(!formInput.phone.match(phoneRegex)){
                setPhoneErr('Invalid Phone Number');
                // setAllowSendData(false)
            }else{
                setPhoneErr('')
                // setAllowSendData(true)
            }

            // password validation 
            if(formInput.password == ''){
                setPasswordErr('Password is required')
                // setAllowSendData(false)
            //     setValidationError({...validationError,passwordErr:'Password is required'});
            // }else{
            //     setValidationError({...validationError,passwordErr:''});
            }else if(formInput.password.length <8){
                setPasswordErr('Password contains minimum 8 characters');
                // setAllowSendData(false)
            }else{
                setPasswordErr('')
                // setAllowSendData(true)
            }

            //re password validation
            if(formInput.repassword == ''){
                setRepasswordErr('Re-password is required')
                // setAllowSendData(false)
            //     setValidationError({...validationError,repasswordErr:'Re-password is required'})
            // }else{
            //     setValidationError({...validationError,repasswordErr:''});
            }else if(formInput.repassword !== formInput.password){
                setRepasswordErr('Re-password is mismatch')
                // setAllowSendData(false)
            }else{
                setRepasswordErr('')
                // setAllowSendData(true)
            }
            console.log('hellooo check value...',usernameErr);
            // if(usernameErr=='' && emailErr=='' && phoneErr=='' && passwordErr=='' && repasswordErr==''){
            //     setAllowSendData(true)
            // }
        // }else{
        //     setAllowSendData(true);
        // }
    }

    let onSubmit=(event)=>{
        event.preventDefault();
        // props.validateFieldProp();
        validateField();
        if (allowSendData===true) {
            console.log("final Data... call....");
            // setFinalData(formInput);
            // props.recieveData(formInput);
        }
    }

    return (
        <div className="main-div">
            <form className='form-div'>
                <div className="col">
                    <div className="col">
                        <label>Name:</label>
                        <input type="text" name='username' maxLength={30} className="form-control" placeholder="Name" onChange={getInput} />
                        <span className='errorClass'>{usernameErr}</span>
                    </div>
                    <div className="col">
                        <label>Email:</label>
                        <input type="email" name='email' maxLength={50} className="form-control" placeholder="Email" onChange={getInput}/>
                        {/* <span className='errorClass'>{validationError.emailErr}</span> */}
                        <span className='errorClass'>{emailErr}</span>

                    </div>
                    <div className="col">
                        <label>Phone:</label>
                        <input type="text" name='phone' maxLength={10} className="form-control" placeholder="Phone" onChange={getInput}/>
                        {/* <span className='errorClass'>{validationError.phoneErr}</span> */}
                        <span className='errorClass'>{phoneErr}</span>

                    </div>
                    <div className="col">
                        <label>Password:</label>
                        <input type="password" name='password' maxLength={16} className="form-control" placeholder="Password" onChange={getInput}/>
                        {/* <span className='errorClass'>{validationError.passwordErr}</span> */}
                        <span className='errorClass'>{passwordErr}</span>

                    </div>
                    <div className="col">
                        <label>Re-Password:</label>
                        <input type="password" name='repassword' maxLength={16} className="form-control" placeholder="Re-Password" onChange={getInput}/>
                        {/* <span className='errorClass'>{validationError.repasswordErr}</span> */}
                        <span className='errorClass'>{repasswordErr}</span>

                    </div>
                    <div className="btnClass">
                        <button className='btn btn-primary' onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;