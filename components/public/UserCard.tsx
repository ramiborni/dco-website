import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import Utilities from '../../styles/Utilities.module.css'

const UserCard = () => {
    return (
        <Paper className="flex flex-col p-5 text-center space-y-5">
        <Avatar className="m-auto h-32 w-32" src="/icons/agumon-icon.png"/>
        <Typography className={
                Utilities.Heartbit + ' truncate'
            }
            variant="h5">
            rikiraspoutine
        </Typography>
        <Chip className="m-auto" style={{width:'150px'}} label="NOT ACTIVE"/>
        <Link href="/account/profile/donation">
          <Button variant="contained" color="primary">ACTIVATE ACCOUNT FOR CBT</Button>
        </Link>

    </Paper>
    );
}

export default UserCard;