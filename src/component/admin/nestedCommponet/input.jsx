import React from 'react';

const Input = ({ type, name, label, value, error, onChange}) => {
    
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
            value={value} 
            onChange={onChange}
            id={name}
            name={name}
            type={type} 
            className="form-control"  />
            {/* <input ref={this.userMailId} className="form-control" type="text" name="name" id="mailId"/> */}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;
