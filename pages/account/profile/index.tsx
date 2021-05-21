import {Grid} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import {Chip} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Badge} from "@material-ui/core";
import {Paper} from "@material-ui/core";
import React from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import Utilities from '../../../styles/Utilities.module.css'
import Link from 'next/link'

const profile = () => {
    return (
        <ProfileLayout>
            <Paper className="bg-yellow-500 p-5 w-full">
                <Grid container
                    spacing={5}
                    alignItems="center">
                    <Grid item
                        xs={12}
                        md={8}
                        lg={10}>
                        <Typography variant="h4"
                            className={
                                Utilities.Heartbit + " font-bold"
                        }>Welcome in DIGIMON CRISIS ONLINE</Typography>
                        <Typography variant="h6">
                            Here you check the status of your account , download the game , update your account informations , and donate to help the game for growing
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={12}
                        md={4}
                        lg={2}
                        className="p-0 mb-5 lg:-mt-4 lg:-mb-4">
                        <img className="m-auto" height="150" width="150" src="/icons/guilmon.png"/>
                    </Grid>
                </Grid>
            </Paper>
            <div style={
                {height: '50px'}
            }></div>
            <Grid container
                spacing={3}>
                <Grid item
                    xs={12}
                    md={7}
                    lg={9}>
                    <Paper className="p-5 space-y-5">
                        <Typography className={
                                Utilities.Heartbit
                            }
                            variant="h4">
                            DONATIONS
                        </Typography>
                        <Grid container
                            spacing={4} alignItems="center">
                            <Grid item
                                xs={12}
                                lg={10}>
                                <Typography variant="h6">
                                    You don't have any donation to Digimon Crisis Online , by donating to this server you help in grow, develop and making it alive. Do not deprive us of your donation
                                </Typography>
                            </Grid>
                            <Grid item
                                xs={12}
                                lg={2}>
                                <img className="flex-initial m-auto" height="100" width="100" src="/icons/sad-donate.png"/>
                            </Grid>
                        </Grid>
                        <div className="text-center">
                           <Link href="/account/profile/donation">
                              <Button variant="outlined" color="primary" className={Utilities.CFmister}>
                                         DONATE AND HELP DCO FOR GROWING
                              </Button>
                           </Link>
                        </div>
                    </Paper>
                </Grid>
                <Grid item
                    xs={12}
                    md={5}
                    lg={3}>
                    <Paper className="flex flex-col p-5 text-center space-y-5">
                        <Avatar className="m-auto h-32 w-32" src="/icons/agumon-icon.png"/>
                        <Typography className={
                                Utilities.CFmister + ' truncate'
                            }
                            variant="h6">
                            rikiraspoutine
                        </Typography>
                        <Chip className="m-auto" style={{width:'150px'}} label="NOT ACTIVE"/>
                        <Button variant="contained" color="primary">ACTIVATE ACCOUNT FOR CBT</Button>


                    </Paper>
                </Grid>
            </Grid>

        </ProfileLayout>
    );
}

export default profile;
