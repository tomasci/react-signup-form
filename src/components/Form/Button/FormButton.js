import './FormButton.scss'

function FormButton({label = '', ...rest}) {
    return (
        <div className="form-button">
            <button type={"submit"} {...rest}>
                {label}
            </button>
        </div>
    )
}

export default FormButton