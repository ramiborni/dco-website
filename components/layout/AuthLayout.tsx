import { Container } from "@material-ui/core";
import React from "react";
import Utilities from '../styles/Utilities.module.css'

const AuthLayout = ({children}) => {
    return (
        <>
        <main className={Utilities.root}>
             <Container className="p-5">
               {children}    
             </Container>
        </main>
        </>
    );
}

export default AuthLayout;