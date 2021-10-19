import FormContainer from "./Container/FormContainer";
import FormLogotype from "./Logotype/FormLogotype";
import FormHeading from "./Heading/FormHeading";
import FormRadioInput from "./Input/FormRadioInput";
import FormInput from "./Input/FormInput";
import FormButton from "./Button/FormButton";
import FormInformation from "./Information/FormInformation";
import FormPasswordInput from "./Input/FormPasswordInput";

function Form() {
    function onSubmit(data) {
        console.log(data)
        alert(JSON.stringify(data))
    }

    return (
        <FormContainer onSubmit={onSubmit}>
            <FormLogotype/>
            <FormHeading title={"Sign Up with email"}/>
            <FormRadioInput
                label={"Gender"}
                name={'gender'}
                radioGroup={[
                    {
                        icon: 'male',
                        label: 'Male',
                    },
                    {
                        icon: 'female',
                        label: 'Female',
                    },
                    {
                        icon: 'transgender',
                        label: 'Other',
                    }]}
                validation={{
                    required: true
                }}
            />
            <FormInput
                label={"Email"}
                name={"email"}
                type={"email"}
                placeholder={"johnsmith@mail.com"}
                autocomplete={false}
                validation={{
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    }
                }}
            />
            {/*<FormInput*/}
            {/*    label={"Just another field"}*/}
            {/*    name={"text"}*/}
            {/*    type={"text"}*/}
            {/*    placeholder={"text"}*/}
            {/*    autocomplete={false}*/}
            {/*    validation={{*/}
            {/*        required: true,*/}
            {/*        minLength: 6*/}
            {/*    }}*/}
            {/*/>*/}
            <FormPasswordInput
                label={"Create password"}
                name={"password"}
                placeholder={"****************"}
                autocomplete={false}
                validation={{
                    required: true,
                    minLength: 6
                }}
                hasConfirmation={false}
                labelConfirmation={"Confirm password"}
            />
            <FormButton
                label={'Sign up'}
            />
            <FormInformation>
                Already have an account? <a href="#login">Log In</a>
            </FormInformation>
            <FormInformation>
                Review privacy and disclosures <a href="#here">here</a>
            </FormInformation>
        </FormContainer>
    )
}

export default Form