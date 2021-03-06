import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = { 
        data:{},
        errors:{}
     }

     loginValidation = () =>{
        const options =  {abortEarly:false};
        const {error} = Joi.validate(this.state.data, this.schema,options);

        if(!error) return null;

        const errors = {};

        for (let item of error.details) errors[item.path[0]] =item.message;
        return errors;

        // const errors = {};
        // const {data} = this.state;
        // if(data.emailId.trim() === "")
        // errors.emailId = "please enter our valid mail id";
        // if(data.password.trim() === "")
        // errors.password = "please enter our valid password id";
        // return Object.keys(errors).length === 0 ? null : errors;
    };

    loginValidationPorperty = ({name,value}) =>{

        const obj = { [name]:value};
        const  schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj,schema);
        return error ? error.details[0].message : null;
        // if(name === 'emailId'){
        //     if(value.trim() === '') return " please enter our valid mail id";
        // }
        // if(name === 'password'){
        //     if(value.trim() === '') return " please enter our valid password";
        // }
    };


    handleSubmit = e =>{
        e.preventDefault();
        //call server
        //const userMailId = this.userMailId.current.value;
        const errors = this.loginValidation();
        console.log(errors);
        this.setState({errors:errors || {} });
        if(errors) return;

        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.loginValidationPorperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({data, errors});
    };

    renderInput(name,label, type = 'text'){
    const { data, errors} = this.state;
        return (<Input 
        type={type}
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange} />
        )
    }

    renderSelect(name,label, options){
        const { data, errors} = this.state;
            return (<Select 
            name={name}
            value={data[name]}
            label={label}
            options={options}
            error={errors[name]}
            onChange={this.handleChange} />
            );
        }

    renderButton(label){
        return <button 
        disabled={this.loginValidation()}
        className="btn btn-primary col-6 offset-3 ">
            {label}
        </button>
    }


}
 
export default Form;