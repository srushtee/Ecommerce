import React from 'react'
import './forminput.scss'

const FormInput = ({onChange, label, ...otherProps}) => {
    console.log(otherProps);
    return (
        <div className="group">
            <input className="form-input" onChange={onChange}  {...otherProps}/>
            {label ? 
                (<label className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
                >
                {label}
                </label>
                ) : null
            }
        </div>
    )
}

export default FormInput;
