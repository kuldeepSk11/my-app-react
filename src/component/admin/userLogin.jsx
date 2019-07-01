import React from 'react';
import Joi from 'joi-browser';
import Form from './nestedCommponet/form';
import { Redirect } from "react-router-dom";
import { Link} from 'react-router-dom';
import auth from "../../services/authService";


class UsersLogin extends Form {
    constructor(props) {
        super(props);
        this.state = { 
            data:{emailId:'',password:''},
            errors:{}
         }
    }

    schema ={
        emailId: Joi.string()
        .required()
        .email()
        .label("Email Id"),
        password: Joi.string().required().label("Password"),
    }

    doSubmit = async () => {
        try {

            console.log(this.state);
          const { data } = this.state;
          await auth.login(data.emailId, data.password);
    
          const { state } = this.props.location;
          window.location = state ? state.from.pathname : "/";
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.emailId = ex.response.data;
            this.setState({ errors });
          }
        }
      };
    

    //userMailId = React.createRef();

    

    render() { 

        if (auth.getCurrentUser()) return <Redirect to="/" />;

        return ( 
            <React.Fragment> 
                <div className="container">
                    <div className="row">
                        <div className="well col-md-6 offset-md-3 ">
                        <form onSubmit={this.handleSubmit} id="login-form" >

                        <h2 className="text-center">Login</h2>
                        <hr/>

                        <div id="form-content">

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

                                {this.renderButton("Login")}
                        </div>

                    </form>
                    <hr/>
                    <p className="text-center">If Your New Register here</p>
                    <Link className="btn btn-secondary col-4 offset-4 p-2"  to="/register">Register</Link>
                        </div> 
                    </div> 
                    </div> 
            </React.Fragment>
         );
    }
}
 
export default UsersLogin;