import {Paper} from "@material-ui/core";
import { Button } from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import React from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import HeadSpecified from "../../../components/public/HeadSpecified";
import UserCard from "../../../components/public/UserCard";
import Utilities from '../../../styles/Utilities.module.css'

const settings = () => {
    return (
        <>
            <HeadSpecified title="Settings"/>
            <ProfileLayout>
                <Grid container
                    spacing={3}>
                    <Grid item
                        xs={12}
                        md={7}
                        lg={9}>
                        <Paper className="p-5 space-y-5">
                            <Typography variant="h5"
                                className={
                                    Utilities.Akzidenz
                            }>
                                Update Account
                            </Typography>
                            <TextField value={"rikiraspoutine"}
                                disabled
                                fullWidth
                                variant="outlined"
                                label="Username"></TextField>
                            <TextField value={"rikiraspoutine@gmail.com"}
                                disabled
                                fullWidth
                                variant="outlined"
                                label="Email"></TextField>
                            <TextField type="password" fullWidth variant="outlined" label="Password"></TextField>
                            <TextField value={"Riki#7004"}
                                fullWidth
                                variant="outlined"
                                label="Discord Id"></TextField>
                            <div className="flex">
                                <div className="flex-grow"></div>
                                <Button variant="contained" color="primary">
                                   Update Account
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item
                        xs={12}
                        md={5}
                        lg={3}>
                        <UserCard></UserCard>
                    </Grid>
                </Grid>
            </ProfileLayout>
        </>
    );
}

export default settings;
