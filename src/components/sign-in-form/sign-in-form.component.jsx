import React, { useState, useContext } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

import { UserContext } from "../../contexts/user.context";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const resetformfields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            setCurrentUser(user);

            resetformfields();
        } catch (err) {
            switch (err.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.error(err);
                    break;
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
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
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType={"google"}
                        onClick={signInWithGoogle}
                    >
                        Google sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
