import React, {useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {UserContext} from '../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName,email} = result.user;
                const signInUser = {name:displayName, email}
                var credential = result.credential;
                var token = credential.accessToken;               
                var user = result.user;
                setLoggedInUser(signInUser);
                
            }).catch((error) => {                
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div className="d-flex justify-content-center ">
            <div className="w-75 p-5 m-5" style={{ border: "2px solid orange", borderRadius: "10px" ,backgroundColor:"#E67E22"}} >

                <div >
                    <h2 className="text-center text-white">LOG IN WITH</h2>
                    <br />
                    <div className="text-center ">
                        <button onClick={handleGoogleSignIn} className="my-3 p-3" style={{borderRadius:"15px",backgroundColor:"#F1C40F "}}><FontAwesomeIcon className="icon active-icon text-center" icon={faGoogle} /> Google Sign In</button>
                    </div>
                    <br />
                    <h4 className="text-center text-white">Don't have an account? please log in with google</h4>
                </div>
            </div>
        </div>
    );
};

export default Login;