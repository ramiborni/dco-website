import { Button, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import React from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import Utilities from '../../styles/Utilities.module.css'
import Link from 'next/link'

const login = (props) => {
    const login = () => {}
    
    return (
        <AuthLayout title="Login">
             <Typography variant="h5"
                className={
                    Utilities.Akzidenz + " font-bold pb-2"
            }>
                LOG IN
            </Typography>
            <TextField required fullWidth variant="outlined" label="Username"/>
            <TextField type="password" required fullWidth variant="outlined" label="Password"/>
            <div className="h-1"></div>
            <Button onClick={
                    () => login()
                }
                className="text-white"
                fullWidth
                variant="contained"
                disableElevation
                color="primary">
                LOG IN
            </Button>
            <Link href="/account/signup">
                <Button>
                   Don't have an account? Sign up right now !
                </Button>
            </Link>
            <Link href="/account/reset">
                <Button>
                    Forget Password ? Reset it 
                </Button>
            </Link>
           
       
       
       
        </AuthLayout>
    );
}

export default login;
