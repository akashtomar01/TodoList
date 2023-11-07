// import React from "react";

import ViewFormChild from "../View Comp Child/viewFormChild";

let ViewForm = () =>{
    // console.log('props ... ',props);
    // let {email} = props
    return(
        <div>
            <h3>Child Component Of Parent Component which is receive data from parent via props</h3>
            <form>
                    <div>
                        <label>First Name:</label>
                        <input type="text" readOnly/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text"  readOnly/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" readOnly/>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="tel"  readOnly/>
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="textarea"  readOnly/>
                    </div>
            </form>

            <div>
                <ViewFormChild />
            </div>
        </div>
    );
    
}

export default ViewForm;