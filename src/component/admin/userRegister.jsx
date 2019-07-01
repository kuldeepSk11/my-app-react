import React from 'react';
import Joi from 'joi-browser';
import Form from './nestedCommponet/form';
import { Link} from 'react-router-dom';
import * as userService from "../../services/userService";
import auth from "../../services/authService";

class UsersRegister extends Form {
    constructor(props) {
        super(props);
        this.state = { 
            data:{emailId:'',password:'', userName:''},
            errors:{}
         }
    }

    schema ={
        userName: Joi.string()
        .required()
        .label("User Name"),
        emailId: Joi.string()
        .required()
        .email()
        .label("Email Id"),
        password: Joi.string()
        .required()
        .min(5)
        .label("Password"),
    }

    doSubmit = async () => {
        try {
          const response = await userService.register(this.state.data);
          auth.loginWithJwt(response.headers["x-auth-token"]);
          window.location = "/login";
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            this.setState({ errors });
          }
        }
      };
    

    userMailId = React.createRef();  

    render() { 
        return ( 
            <React.Fragment> 

                <div className="container">
                    <div className="row">
                        <div className="well col-md-6 offset-md-3 ">
                        <form onSubmit={this.handleSubmit} id="login-form" >

                        <h2 className="text-center">Registration</h2>
                        <hr/>

                        <div id="form-content-new">

                        {this.renderInput("userName","User Name")}
                        {this.renderInput("emailId","Email Id")}
                        {this.renderInput("password","Password", "password")}

                                {/* <Input 
                                name="password"
                                label="Password"
                                value={data.password}
                                error={errors.password}
                                onChange={this.handleChange} />
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    value={data.passowrd} 
                                    onChange={this.handleChange}
                                    className="form-control" type="password" name="Password" />
                                </div> */}

                                {this.renderButton("Registration")}
                        </div>

                    </form>
                    <hr/>
                    <p className="text-center">If already Account login here</p>
                    <Link className="btn btn-secondary col-4 offset-4 p-2"  to="/login">Login</Link>
                        </div> 
                    </div> 
                    </div>
            </React.Fragment>
         );
    }
}
 
export default UsersRegister;