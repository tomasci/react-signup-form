import './FormInput.scss'
import {useRef} from "react";

function FormInput({methods, validation = {}, label = '', name = '', type = '', placeholder = '', autocomplete = true, ...params}) {
    const { ref, ...rest } = methods.register(name, validation)
    let passwordRef = useRef(null)
    const { formState: { errors } } = methods

    function togglePasswordInput() {
        const passwordInput = passwordRef.current
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'
        } else {
            passwordInput.type = 'password'
        }
    }

    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            {(type === 'password') ? (
                <div className="form-input__password">
                    <input
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        autoComplete={(autocomplete ? '' : 'off')}
                        ref={(e) => {
                            ref(e)
                            passwordRef.current = e
                        }}
                        {...rest}
                        {...params}
                        className={errors[name] ? 'validation-error' : ''}
                    />
                    <button onClick={() => {
                        togglePasswordInput()
                    }}/>
                </div>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    autoComplete={(autocomplete ? '' : 'off')}
                    ref={(e) => {
                        ref(e)
                        passwordRef.current = e
                    }}
                    {...rest}
                    {...params}
                    className={errors[name] ? 'validation-error' : ''}
                />
            )}

            {errors[name]?.type === 'required' && (<span className="form-input_error-message">Required</span>)}
            {errors[name]?.type === 'pattern' && (<span className="form-input_error-message">Wrong format</span>)}
            {errors[name]?.type === 'minLength' && (<span className="form-input_error-message">Must contain more than 6 characters</span>)}

        </div>
    )
}

export default FormInput