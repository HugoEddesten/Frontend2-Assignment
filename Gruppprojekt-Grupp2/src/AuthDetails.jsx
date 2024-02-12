import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styled from "styled-components";

const LogOutDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`

const LogOutButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    padding: .5rem;
    border-radius: 1rem;
    margin-top: .5rem;
    background-color: #f0f0f0;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
        background-color: #000000;
        color: white;
        transition: 0.1s;
    }
`

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })

        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful');
        }).catch(error => console.log(error))
    }

    return (
        <LogOutDiv>{authUser ? <><h1>{`Inloggad som ${authUser.email}`}</h1><LogOutButton onClick={userSignOut}>Logga ut</LogOutButton></> : <h1>Utloggad</h1>}</LogOutDiv>
    )
}

export default AuthDetails