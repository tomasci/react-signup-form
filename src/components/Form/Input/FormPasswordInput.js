import './FormInput.scss'
import {useRef} from "react";

function FormPasswordInput({methods, validation = {}, label = '', name = '', placeholder = '', autocomplete = true, hasConfirmation = false, labelConfirmation = '', ...params}) {
    const passwordRef = useRef(null)
    const passwordRef_confirmation = useRef(null)

    const { ref, ...rest } = methods.register(name, Object.assign({}, validation, {
        validate: (hasConfirmation ? value => value === passwordRef_confirmation.current.value || "Passwords not match" : true)
    }))
    const { formState: { errors } } = methods

    function togglePasswordInput(confirmation = false) {
        const passwordInput = confirmation ? passwordRef_confirmation.current : passwordRef.current

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'
        } else {
            passwordInput.type = 'password'
        }
    }

    return (
        <>
            <div className="form-input">
                <label htmlFor={name}>{label}</label>
                <div className="form-input__password">
                    <input
                        type="password"
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
                    <button type="button" onClick={() => {
                        togglePasswordInput()
                    }}/>
                </div>

                {errors[name]?.type === 'required' && (<span className="form-input_error-message">Required</span>)}
                {errors[name]?.type === 'pattern' && (<span className="form-input_error-message">Wrong format</span>)}
                {errors[name]?.type === 'minLength' && (<span className="form-input_error-message">Must contain more than 6 characters</span>)}
                {errors[name]?.type === 'validate' && (<span className="form-input_error-message">Passwords not match</span>)}

            </div>

            {hasConfirmation ? (
                <div className="form-input">
                    <label htmlFor={name}>{label}</label>
                    <div className="form-input__password">
                        <input
                            type="password"
                            placeholder={placeholder}
                            name={name + "_confirmation"}
                            autoComplete={(autocomplete ? '' : 'off')}
                            ref={passwordRef_confirmation}
                            {...params}
                        />
                        <button type="button" onClick={() => {
                            togglePasswordInput(true)
                        }}/>
                    </div>

                    {errors[name]?.type === 'validate' && (<span className="form-input_error-message">Passwords not match</span>)}

                </div>
            ) : null}
        </>
    )
}

export default FormPasswordInput