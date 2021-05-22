import {motion} from 'framer-motion';
import Utilities from '../../styles/Utilities.module.css'
import {createMuiTheme, CssBaseline, Hidden, ThemeProvider} from '@material-ui/core';
import React from 'react';
import {AppBar} from '@material-ui/core';
import Link from 'next/link';
import {Toolbar} from '@material-ui/core';
import {Drawer} from '@material-ui/core';
import {Avatar} from '@material-ui/core';
import {createStyles} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Typography } from '@material-ui/core';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { useRouter } from 'next/router'
const drawerWidth = 240;
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex'
        },
        drawer: {
            [theme.breakpoints.up('lg')]: {
                width: drawerWidth,
                flexShrink: 0,
                
            }
        },
        appBar: {
            [theme.breakpoints.up('lg')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth
            }
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('lg')]: {
                display: 'none'
            }
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            backgroundColor:'#212121',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3)
        }
    })
);


const ProfileLayout = ({children}) => {
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#FEDE00'
            }
        },
        typography: {
            fontFamily: 'Inter'
        }
    });
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawerList = [
        {
            "title":"Profile",
            "icon":<AccountCircleRoundedIcon/>,
            "path":"/account/profile",
        },
        {
            "title":"Donation",
            "icon":<StoreRoundedIcon/>,
            "path":"/account/profile/donate",
        },
        {
            "title":"Download",
            "icon":<GetAppRoundedIcon/>,
            "path":"/account/profile/download",
        },
        {
            "title":"Settings",
            "icon":<SettingsRoundedIcon/>,
            "path":"/account/profile/settings",
        },
        {
            "title":"Logout",
            "icon":<ExitToAppRoundedIcon/>,
            "path":"/account/logout",
        },
        
    ]
    const router = useRouter()

    const drawer = <div className="p-2">
        
        <Paper className="rounded bg-gray-500 p-2 mb-5	">
            <Grid container alignItems="center">
                <Grid item xs={4}>
                   <Avatar className="m-auto" src="/UserIcon.png"></Avatar>
                </Grid>
                <Grid item xs={8} className="flex flex-col">
                   <Typography  className={Utilities.CFmister+" truncate"} variant="overline">rikiraspoutine</Typography>

                </Grid>
            </Grid>
        </Paper>
        <List className="w-full">
            {drawerList.map((item,index) =>
                <ListItem key={'drawerlistitem-'+index} onClick={() => {
                    router.push(item.path);
                }} button selected={router.route===item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText  primary={<span className={Utilities.Heartbit}>{item.title}</span>}></ListItemText>
            </ListItem>
            )}
        </List>
    </div>;

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
              
                    <AppBar className={clsx(classes.appBar)} position="relative" elevation={0} color="default">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Link href="/">
                                <img alt="Digimon Crisis logo" height="120" width="120" src="/DigimonCrisis.png"/>

                            </Link>
                            <div className="flex-grow"></div>
                            <Link href="/account/donate">
                                <Button color="inherit" variant="outlined" className={Utilities.Heartbit+" text-white text-xl"}>Donate</Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        <Hidden lgUp implementation="css">
                            <Drawer
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper
                                }}
                                ModalProps={{
                                    keepMounted: true 
                                }} color="default"
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden mdDown implementation="css">
                            <Drawer
                                classes={{
                                    paper: classes.drawerPaper
                                }}
                                variant="permanent"
                                open color="default"
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                    <main className={classes.content + ' lg:ml-56 p-10'}>
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
                       {children}
                       </motion.div>
                    </main>
                


            </ThemeProvider>
        </>
    );
};

export default ProfileLayout;