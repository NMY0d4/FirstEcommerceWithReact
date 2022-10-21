import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { AuthenticationController } from "./authentication.styles";

const Authentication = () => {
    return (
        <AuthenticationController>
            <SignInForm />
            <SignUpForm />
        </AuthenticationController>
    );
};

export default Authentication;
