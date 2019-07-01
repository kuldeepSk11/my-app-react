import React from 'react';

const Select = ({  name, label, options,value, error, onChange}) => {
    
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} value={value} onChange={onChange} className="form-control">
                <option value=""/>
                {options.map(option => (

                    <option key={option._id} value="option._id"> 
                        {option.name}    
                    </option>
                ))}
            {/* <input ref={this.userMailId} className="form-control" type="text" name="name" id="mailId"/> */}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Select;
