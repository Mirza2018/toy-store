import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import Swal from "sweetalert2";
import app from "../firebase.config";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loadding, setLodding] = useState(true);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currrentUser => {
            setUser(currrentUser);
            setLodding(false)
            // if (currrentUser && currrentUser.email) {
            //     const loggedUser = { email: currrentUser.email }
            //     fetch('http://localhost:5000/jwt', {
            //         method: "POST",
            //         headers: {
            //             'content-type': 'application/json'
            //         },
            //         body: JSON.stringify(loggedUser)
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             console.log('jwt response', data);
            //             localStorage.setItem('volunteer-access-token', data.token)
            //         })
            // }
            // else{
            //     localStorage.removeItem('volunteer-access-token')
            // }

           
        })
        return () => {
            unsubscribe;
        }
    }, [auth])


    const createUser = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        setLodding(true)
        return signInWithPopup(auth, provider)
    }
    const update = (name) => {
        setLodding(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const logOut = () => {
        setLodding(true)
        return (
            signOut(auth),
            Swal.fire(
                'Successfully Sign Out!',
                'sign out',
                'error'
            ))

    }



    const handleBuynow = (toyin) => {
        const name = toyin.name;
        const img = toyin.img;
        const price = toyin.price;
        const email = user?.email;
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You are not Login!',
                footer: '<a href="/login">Login Now?</a>'
              })
        }


        const person = user.displayName;
        const info = {
            email, person, name, img, price
        }

        Swal.fire({
            title: 'Are you sure Buy this?',
            text: "You are add this in your cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Buy it!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch("http://localhost:5000/buy", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.insertedId) {
                                Swal.fire(
                                    'Successfully Buy!',
                                    'To see go to cart!',
                                    'success'
                                )
                            }
                        })
                }
            })
    }
    const values = {
        user,
        createUser,
        logIn,
        googleLogIn,
        update,
        logOut,
        loadding,
        handleBuynow

    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;