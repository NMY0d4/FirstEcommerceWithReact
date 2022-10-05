import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocref = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;