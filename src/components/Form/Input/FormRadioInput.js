import './FormRadioInput.scss'

function FormRadioInput({methods, validation = {}, label = '', name = '', radioGroup = [{icon: '', label: ''}], ...rest}) {
    const { register, formState: { errors } } = methods

    return (
        <div className="form-radio-input">
            <span className={"label"}>{label}</span>

            <div className="form-radio-input-group">
                {radioGroup.map((element, index) => {
                    return (
                        <label htmlFor={index} key={index}>
                            <input
                                type="radio"
                                // name={name}
                                id={index}
                                value={element.label}
                                {...register(name, validation)}
                                {...rest}
                            />
                            <div className="form-radio-input__custom">
                                <div className={"icon icon_" + element.icon}/>
                                <span>{element.label}</span>
                            </div>
                        </label>
                    )
                })}
            </div>

            {errors[name]?.type === 'required' && (<span className="form-radio-input_error-message">Required</span>)}

        </div>
    )
}

export default FormRadioInput