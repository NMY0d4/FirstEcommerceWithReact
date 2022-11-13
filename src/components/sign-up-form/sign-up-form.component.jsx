import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { SignUpContainer } from "./sign-up-form.styles";
import { H2 } from "../../routes/authentication/authentication.styles";
import Button from "../button/button.component";
import { signUpStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    // console.log(formFields);

    const resetformfields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match.");
            return;
        }
        try {
            dispatch(signUpStart(email, password, displayName));
            resetformfields();
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use.");
            } else {
                console.error("user creation encountered an error", err);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignUpContainer>
            <H2>I do not have an account</H2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    value={displayName}
                    required
                    onChange={handleChange}
                    name="displayName"
                />

                <FormInput
                    label="Email"
                    type="email"
                    value={email}
                    required
                    onChange={handleChange}
                    name="email"
                />

                <FormInput
                    label="Password"
                    type="password"
                    value={password}
                    required
                    onChange={handleChange}
                    name="password"
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
