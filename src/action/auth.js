import { 
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import Swal from 'sweetalert2'
import { auth, googleSingIn } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPass = ( email, password ) => {
    return (dispatch) => {
        
        dispatch( startLoading() );
        signInWithEmailAndPassword(auth, email, password )
            .then(({ user }) => {
                dispatch( login(user.uid, user.displayName ));
                dispatch( finishLoading() );
            })
            .catch( e => {
                console.log(e)
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
            });
    }
}

export const startLoginWithEmailPassword = ( email, password, name ) =>{
    return ( dispatch ) => {
        createUserWithEmailAndPassword( auth, email, password )
            .then( async({ user }) => {
                await updateProfile( auth.currentUser, {
                    displayName: name
                });
                dispatch( login( user.uid, user.displayName ) );
            })
            .catch( e => {
                console.log(e)
                Swal.fire('Error', e.message, 'error');
            })
    }
} 

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup( auth, googleSingIn )
            .then( ({user}) => {
                dispatch(login( user.uid, user.displayName ));
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogOut = () => {
    return async ( dispatch ) => {
        await signOut( auth );

        dispatch( LogOut() )
    }
}

export const LogOut = () => ({
    type: types.logout
})