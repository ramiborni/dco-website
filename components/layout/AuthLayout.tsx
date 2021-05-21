import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import HeadSpecified from "../public/HeadSpecified";
import Utilities from '../../styles/Utilities.module.css'
import { motion } from "framer-motion";
import Link from 'next/link';

const AuthLayout = ({children,title}) => {
    return (
        <>
        <HeadSpecified title={title}></HeadSpecified>
        <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                }
            }}>
        <main className={Utilities.AuthBackground}>
            <Link href="/"><Button  className="text-white">Back To Home Page</Button></Link>
             <Container className="p-2">
                <Grid container alignItems="center" justify="center" className="-mt-10">
                    <Grid className=" flex h-screen justify-center items-center"  item xs={12} md={6} lg={4}>
                            <Paper square className="py-5 px-4 text-center space-y-2 ">
                                <img className="m-auto mb-5" height="100" width="200" src="/DigimonCrisis.png"/>
                                {children}
                            </Paper>
                    </Grid>
                </Grid>          
             </Container>
        </main>
        </motion.div>
        </>
    );
}

export default AuthLayout;