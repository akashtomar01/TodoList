import './loginform.css'

let LoginForm = (props) =>{

    let getInput = (event) =>{
        let {name,value} = event.target;
        props.getInputData(name,value);
    }
    
    return (
        <div className="main-div">
            <form className='form-div'>
                <div className="col">

                    <div className="col">
                        <label>Name:</label>
                        <input type="text" name='username' maxLength={30} className="form-control" placeholder="Name" onChange={getInput} />
                        <span className='errorClass'>{props.usernameErr}</span>
                    </div>

                    <div className="col">
                        <label>Email:</label>
                        <input type="email" name='email' maxLength={50} className="form-control" placeholder="Email" onChange={getInput}/>
                        <span className='errorClass'>{props.emailErr}</span>
                    </div>

                    <div className="col">
                        <label>Phone:</label>
                        <input type="text" name='phone' maxLength={10} className="form-control" placeholder="Phone" onChange={getInput}/>
                        <span className='errorClass'>{props.phoneErr}</span>
                    </div>

                    <div className="col">
                        <label>Password:</label>
                        <input type="password" name='password' maxLength={16} className="form-control" placeholder="Password" onChange={getInput}/>
                        <span className='errorClass'>{props.passwordErr}</span>
                    </div>

                    <div className="col">
                        <label>Re-Password:</label>
                        <input type="password" name='repassword' maxLength={16} className="form-control" placeholder="Re-Password" onChange={getInput}/>
                        <span className='errorClass'>{props.repasswordErr}</span>
                    </div>

                    <div className="btnClass">
                        <button className='btn btn-primary' onClick={props.onSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;