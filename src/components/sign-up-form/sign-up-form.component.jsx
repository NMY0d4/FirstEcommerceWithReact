import React, { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
                console.error(err.message);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>

            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    type="text"
                    value={displayName}
                    required
                    onChange={handleChange}
                    name="displayName"
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    required
                    onChange={handleChange}
                    name="email"
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    required
                    onChange={handleChange}
                    name="password"
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
