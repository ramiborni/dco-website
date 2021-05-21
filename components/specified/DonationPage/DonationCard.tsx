import {Avatar, ListItemAvatar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {List} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {ListItemIcon} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {Paper} from "@material-ui/core";
import React from "react";
import {ReactNode} from "react";
import Utilities from '../../../styles/Utilities.module.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import clsx from 'clsx'
import {Grid} from "@material-ui/core";
import {PayPalButton} from "react-paypal-button-v2";
import { CircularProgress } from "@material-ui/core";

const DonationCard = ({
    planName,
    img,
    desc,
    price,
    link,
    additionalBadge,
    paypalSDKReady,
    setPaypalSDKReady
} : {
    planName: string,
    img: string,
    desc: Array < string >,
    price: number,
    link: string,
    additionalBadge: ReactNode,
    paypalSDKReady: boolean,
    setPaypalSDKReady: Function

}) => {


    React.useEffect(() => {
        return() => {
            Object.keys(window).forEach(key => {
                if (/paypal|zoid|post_robot/.test(key)) {
                    delete window[key];
                }
            });

            document.querySelectorAll('script[src*="www.paypal.com/sdk"]').forEach(node => node.remove());
        };
    }, []);

    return (
        <Paper className="m-2 p-5 text-center justify-center space-y-5">
            <Avatar className="m-auto h-44 w-44"
                src={img}></Avatar>
            <Typography variant="h5"
                className={
                    Utilities.Heartbit
            }>
                {
                planName.toUpperCase()
            }
                &nbsp;PLAN
            </Typography>
            <Paper variant="outlined" className="p-2">

                {
                desc.map((d, i) => (
                    <Grid key={
                            'desc' + i
                        }
                        container
                        alignItems="flex-start"
                        className="">
                        <Grid item
                            xs={3}
                            className="mb-2 mt-2">
                            🟡
                        </Grid>
                        <Grid item
                            xs={9}
                            className={"mb-2 mt-2 text-left font-bold"}>
                            {d} </Grid>
                    </Grid>
                ))
            } </Paper>
            {additionalBadge}
            <Typography variant="h4"
                className={
                    Utilities.Akzidenz
            }>
                {
                price.toString()
            }
                $
            </Typography>
            {
            (paypalSDKReady) ? <PayPalButton key={
                    planName + "-plan"
                }
                amount={price}
                options={
                    {
                        clientId: "AZXAGIrYTf6YHhP6IaZ4nJp7QH3BZOPccDp_jr6JODMLXrRkxLtrUnM0W3_Q0-eQ0MvxTsHRGxKypjzr",
                        disableFunding: 'credit,card'
                    }
                }
                shippingPreference="NO_SHIPPING"
                createOrder={
                    (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: "Donate " + price + "$ to Digimon Crisis Online",
                                    amount: {
                                        currency_code: "USD",
                                        value: price,
                                        breakdown: {
                                          item_total:{
                                            currency_code: 'USD',
                                            value: price
                                          }
                                        }
                                    },
                                    "items":[
                                      {
                                        "unit_amount": {
                                          "currency_code": "USD",
                                          "value": price
                                        },
                                        "quantity": "1",
                                        "name": "Donation",
                                      },
                                    ]
                                }
                            ],
                            application_context: {
                                shipping_preference: "NO_SHIPPING"
                            }
                        });
                    }
                }
                onApprove={async (data,actions)  =>  {
                     const order = await actions.order.capture();
                     console.log(order);
                }}
                onError = { (err) => {
                  console.error(err);
                }}
                onButtonReady={
                    () => setPaypalSDKReady()
                }
                onSuccess={
                    (details) => {
                        alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        /*return fetch("/paypal-transaction-complete", {
                       method: "post",
                       body: JSON.stringify({
                           orderID: data.orderID
                       })
                   });*/
                    }
                }/> : <CircularProgress />
        } </Paper>
    );
}
DonationCard.defaultProps = {
    additionalBadge: (
        <></>
    )
}
export default DonationCard;
