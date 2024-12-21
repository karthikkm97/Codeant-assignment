import AuthLeft from "../components/signin";
import AuthRight from "../components/signup";

const Auth = () => {
    return (
        <div className="flex gap-2 w-full justify-center">
            <AuthLeft />
            <AuthRight />
        </div>
    );
};

export default Auth;
