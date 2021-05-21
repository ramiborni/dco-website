import {AppBar, Toolbar, Typography, Grid, Button} from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Utilities from '../styles/Utilities.module.css'

export default function Home(props) {
    const getWallpaper =  () => {
       const wallpapers = [Utilities.FirstBackgroundHome,Utilities.SecondBackgroundHome,Utilities.ThirdBackgroundHome,Utilities.ForthBackgroundHome,Utilities.FifthBackgroundHome];
       return wallpapers[Math.floor(Math.random() * wallpapers.length)];
    }
    return (
        <section className={
                'p-2 ' + ' ' + getWallpaper()
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
            <article className="text-white h-full pr-7">
                <Grid container className="h-full" justify="flex-end" alignItems="center">
                    <Grid item>
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
                <Toolbar className="space-x-5">
                    <Link href="/account/signup">
                       <Button className={Utilities.Heartbit+" text-white text-xl"}>Signup</Button>
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
                    <Link href="/contact">
                       <Button className={Utilities.Heartbit+" text-white text-xl"}>Contact</Button>
                    </Link>
                    <a target="_blank" href="https://discord.gg/CMdHdFWH">
                      <Button className={Utilities.Heartbit+" text-white text-xl"}>Discord</Button>
                    </a>
                    <div className="flex-grow"></div>

                    <Link href="/account/profile/donate">
                       <Button color="inherit" variant="outlined" className={Utilities.Heartbit+" text-white text-xl"}>Donate</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </section>
    )
}
