import {Paper} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Table} from "@material-ui/core";
import {TableRow} from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import {TableCell} from "@material-ui/core";
import {TableHead} from "@material-ui/core";
import {Button} from "@material-ui/core";
import React from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import Utilities from '../../../styles/Utilities.module.css'

const download = () => {
    const rows = [
        {
            req:'CPU',
            min:'Pentium 4 2.8G / Sempron2800',
            rec:'Pentium Dual / Athlon 64x2',
        },
        {
            req:'RAM',
            min:'2 GB',
            rec:'4 GB',
        },
        {
            req:'Graphic Card',
            min:'GeForce FX5200 or higher',
            rec:'GeForce 8 Serices / Radeon HD or higher',
        },
        {
            req:'OS',
            min:'Windows 7 64bit',
            rec:'Windows 10 64bit',
        },
        {
            req:'Hard Disk Space',
            min:'15 GB',
            rec:'15 GB',
        },
        {
            req:'Direct X',
            min:'DirectX 9.0c',
            rec:'DirectX 9.0c',
        },
    ]
    return (
        <ProfileLayout>
            <Paper className="space-y-4 p-5">
                <Typography variant="h5"
                    className={
                        Utilities.Akzidenz
                }>
                    Download DIGIMON CRISIS ONLINE
                </Typography>
                <Typography variant="subtitle1">
                    To download the game you should click on the button below , if you have any problem , text us in problems channel in our discord .
                </Typography>
                <div className="flex">
                    <div className="flex-grow"></div>
                    <Button variant="contained" className="bg-yellow-400 flex flex-row text-white items-center h-18 md:w-52 w-full">
                        <img height="35" width="35" src="https://i.pinimg.com/originals/97/c9/a8/97c9a8c3b9d71cd87a13e616b908bf5f.png"/>
                        &nbsp;
                        <Typography className={
                                Utilities.CFmister
                            }
                            variant="h6">
                            Download
                        </Typography>
                    </Button>
                </div>
            </Paper>
            <div className="h-10"></div>
            <Paper className="p-5 space-y-5">

                <Typography variant="h5"
                    className={
                        Utilities.Akzidenz
                }>
                    Minimum & Recommended
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Requirement</TableCell>
                            <TableCell align="center">Minimum</TableCell>
                            <TableCell align="center">Recommended</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> {
                        rows.map((row) => (
                         <TableRow key={row.req}>
                            <TableCell>{row.req}</TableCell>
                             <TableCell>{row.min}</TableCell>
                             <TableCell>{row.rec}</TableCell>
                         </TableRow>

                        ))} 
                    </TableBody>
                </Table>
            </Paper>
        </ProfileLayout>
    );
}

export default download;
