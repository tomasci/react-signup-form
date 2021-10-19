import './FormContainer.scss'
import {useForm} from "react-hook-form";
import React from "react";

function FormContainer({defaultValues, children, onSubmit}) {
    const methods = useForm({ defaultValues })
    const { handleSubmit } = methods

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
                {React.Children.map(children, child => {
                    return child.props.name ?
                        React.createElement(child.type, {
                            ...{
                                ...child.props,
                                methods: methods,
                                key: child.props.name
                            }
                        }) : child
                })}
            </div>
        </form>
    )
}

export default FormContainer