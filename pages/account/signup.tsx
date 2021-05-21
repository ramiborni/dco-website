import {Button, TextField, Typography} from "@material-ui/core";
import React from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import Utilities from '../../styles/Utilities.module.css'
import Link from 'next/link'
import HeadSpecified from "../../components/public/HeadSpecified";

const signup = (props) => {
    const signup = () => {}
    return (
        <>
            <HeadSpecified title="Login"/>
            <AuthLayout title="Sign up">
                <Typography variant="h5"
                    className={
                        Utilities.Akzidenz + " font-bold pb-2"
                }>
                    SIGN UP
                </Typography>

                <TextField required fullWidth variant="outlined" label="Username"/>
                <TextField type="password" required fullWidth variant="outlined" label="Password"/>
                <TextField type="email" required fullWidth variant="outlined" label="Email Address"/>
                <TextField fullWidth variant="outlined" label="Discord ID"/>
                <div className="h-1"></div>
                <Button onClick={
                        () => signup()
                    }
                    className="text-white"
                    fullWidth
                    variant="contained"
                    disableElevation
                    color="primary">
                    SIGN UP
                </Button>
                <Link href="/account/login">
                    <Button>
                        Have an account? Log in !
                    </Button>
                </Link>

            </AuthLayout>
        </>
    );
}

export default signup;
