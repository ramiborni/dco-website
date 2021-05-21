import { Grid } from "@material-ui/core";
import React from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import HeadSpecified from "../../../components/public/HeadSpecified";
import DonationCard from "../../../components/specified/DonationPage/DonationCard";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Chip} from "@material-ui/core";
import Utilities from '../../../styles/Utilities.module.css'
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
const donation = () => {
    var BEST_VALUE_CHIP = <Chip icon={<StarsRoundedIcon/>} label={<span className={Utilities.CFmister}>BEST VALUE</span>} color="secondary" className="rounded-sm"/>;
    var BEST_HELP_CHIP = <Chip label={<span className={Utilities.Akzidenz}>BEST HELP TO SERVER</span>} icon={<FavoriteIcon/>} color="primary" className="rounded-sm"/>;
    const [paypalSDKReady, setPaypalSDKReady] = React.useState([true,false,false,false]);

    return (
        <>
        <HeadSpecified title="Donation"/>
        <ProfileLayout>
            <Grid container>
                <Grid item xs={12} md={6} lg={3}>
                    <DonationCard paypalSDKReady={paypalSDKReady[0]} setPaypalSDKReady={() => {setPaypalSDKReady([true,true,false,false])}}  key={"p1"} planName="Gatomon" img="https://i.pinimg.com/originals/4b/4e/cb/4b4ecbed765e935036942bd0fe7bb90b.jpg" desc={['Activate account and join in CBT','1000 Crown','50T']} price={10} link=""></DonationCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                   <DonationCard  key={"p2"}  paypalSDKReady={paypalSDKReady[1]} setPaypalSDKReady={() => {setPaypalSDKReady([true,true,false,true])}}  planName="Angewomon" img="https://i.pinimg.com/originals/19/91/cb/1991cb3f1d6412d3bb6cbc8471ef10c1.jpg" desc={['Activate account and join in CBT','5000 Crown','200T']}  price={20}  link="" additionalBadge={BEST_VALUE_CHIP}></DonationCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                   <DonationCard  key={"p3"}  paypalSDKReady={paypalSDKReady[2]} setPaypalSDKReady={() => {setPaypalSDKReady([true,true,true,true])}} planName="Ophanimon" img="https://i.pinimg.com/originals/74/b4/16/74b416ba252ae55ffe2f0593bc772c47.jpg" desc={['Activate account and join in CBT','10000 Crown','300T']}  price={50}  link=""></DonationCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                   <DonationCard  key={"p4"}  paypalSDKReady={paypalSDKReady[3]} setPaypalSDKReady={() => {setPaypalSDKReady([true,true,true,true])}} planName="Ophanimon Falldown Mode" img="https://i.pinimg.com/originals/82/2e/ae/822eae566ec226b8569ee16270ccc983.jpg" desc={['Activate account and join in CBT','50000 Crown','500T','Ophanimon falldown mode & Zeedmillenniummon']}  additionalBadge={BEST_HELP_CHIP}  price={100}  link=""></DonationCard>
                </Grid>
            </Grid>
        </ProfileLayout>
      </>
    );
}
export default donation;