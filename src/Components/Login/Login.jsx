import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('google form is cominggggg!!!!!!');
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Go to Login</button>
        </div>
    );
};

export default Login;