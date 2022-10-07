import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

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
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            const userDocref = await createUserDocumentFromAuth(user, {
                displayName,
            });
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
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
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

                {/* <button type="submit">Sign Up</button> */}
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
