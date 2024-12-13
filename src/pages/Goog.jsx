import { useContext } from "react";
import AuthContext from "../ContextProvider/AuthContext";

const Goog = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const handleGoogle = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            alert(err.message)
        })
    }
    return (
        <div>
            <div className="divider">Or</div>
            <button onClick={handleGoogle} className="my-3 border border-blue-600 py-1 text-center w-11/12 rounded-xl">Google</button>
        </div>
    );
};

export default Goog;