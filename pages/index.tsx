import {AppBar, Toolbar, Typography, Grid, Button} from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Utilities from '../styles/Utilities.module.css'

export default function Home(props) {

    return (
        <section className={
                'p-2 ' + ' ' + Utilities.BackgroundHome
            }
            style={
                {height: '100vh'}
        }>
            <AppBar className="text-right"
                elevation={0}
                color="transparent">
                <Toolbar>
                    <div className="flex-grow"></div>
                    <img alt="Digimon Crisis logo" height="150" width="150" src="DigimonCrisis.png"/>
                </Toolbar>
            </AppBar>
            <article className="text-white h-full md:pr-7">
                <Grid container className="h-full text-center md:text-left" justify="flex-end" alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h4"
                            className={
                                Utilities.CFmister
                        }>
                            DIGITAL CRISIS ONLINE
                        </Typography>
                        <Typography variant="h6">
                           AN ADVENTURE MADE ONLY FOR BRAVE TAMERS , MADE FOR YOU
                        </Typography>
                        <Link href="/account/signup">
                        <Button variant="outlined" color="inherit" className="mt-5 self-center">
                            <Typography className={Utilities.Heartbit+" text-white "} variant="h5">
                                SIGN UP IN CLOSED BETA TEST
                            </Typography>
                        </Button>
                        </Link>

                    </Grid>
                </Grid>
            </article>
            <AppBar className="top-auto bottom-0" position="fixed" color="transparent">
                <Toolbar className="space-x-5 justify-center">
                    <Link  href="/account/signup">
                       <Button className={Utilities.Heartbit+" text-white text-xl hidden sm:block"}>Signup</Button>
                    </Link>
                    <Link href="/account/login">
                       <Button className={Utilities.Heartbit+" text-white text-xl"}>Login</Button>
                    </Link>
                    <Link href="/news">
                      <Button className={Utilities.Heartbit+" text-white text-xl"}>News</Button>
                    </Link>   
                    <Link href="/account/download">
                      <Button className={Utilities.Heartbit+" text-white text-xl"}>Download</Button>
                    </Link>                   
                    <a target="_blank" href="https://discord.gg/CMdHdFWH">
                      <Button className={Utilities.Heartbit+" text-white text-xl"}>Discord</Button>
                    </a>
                    <div className="flex-grow"></div>

                    <Link href="/account/profile/donate">
                       <Button color="inherit" variant="outlined" className={Utilities.Heartbit+" text-white text-xl hidden sm:block"}>Donate</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </section>
    )
}
