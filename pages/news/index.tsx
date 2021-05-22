import {AppBar, Divider, Drawer, List,  ListItemText, makeStyles, Toolbar} from "@material-ui/core";
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import React from "react";
import Link from 'next/link'
import Utilities from '../../styles/Utilities.module.css'
import {Button} from "@material-ui/core";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import router from '../../routers/pagesRouters';
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import EventNoteIcon from '@material-ui/icons/EventNote';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import { Chip } from "@material-ui/core";
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NewReleasesRoundedIcon from '@material-ui/icons/NewReleasesRounded';
import { Pagination } from '@material-ui/lab';
import HeadSpecified from "../../components/public/HeadSpecified";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      drawerPaper:  {
          width: '240px'
      }
  }));

const index = () => {
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
    const filters = [
      {
          title:'All news',
          icon:<ListAltRoundedIcon/>,
          code:'all',
      },
      {
        title:'Events',
        icon:<EventNoteIcon/>,
        code:'event',
      },
      {
        title:'Notices',
        icon:<AnnouncementRoundedIcon/>,
        code:'notice',
      },
      {
        title:'Patch Notices',
        icon:<BuildRoundedIcon/>,
        code:'patch',
      }
    ];

    const news = [
        {
            "id":1,
            "title":"[Event] Masters Match and Welcome Back Package!",
            "date":"05/18/2021",
            "type":"event",
            "progress":true,
        },
        {
            "id":2,
            "title":"[Notice] Server Maintenance 20210518",
             "date":"05/18/2021",
             "type":"notice",
             "progress":false,
        },
        {
            "id":3,
            "title":"[Notice] Server Issue 20210516",
            "date":"05/17/2021",
            "type":"notice",
            "progress":false,
        },
    ]

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [filterIndex , setIndex] = React.useState(0);

    const getNewsIcon  = (type) => {
        switch(type){
            case "event":
                return <EventNoteIcon/>
            case "notice":
                return <AnnouncementRoundedIcon/>
            case "patch":
                return <BuildRoundedIcon/>
            default :
                return <AppsRoundedIcon/> 



        }
    }


    return (
        <>
        <HeadSpecified title="News"></HeadSpecified>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
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
            <AppBar position="relative" color="transparent"
                elevation={0}>
                <Toolbar className="hidden lg:flex">
                    <Link href="/">
                        <img alt="Digimon Crisis logo" height="120" width="120" src="DigimonCrisis.png"/>
                    </Link>
                    <div className="flex-grow"></div>
                    <Link href="/account/signup">
                        <Button className={
                            Utilities.Heartbit + " text-white text-xl"
                        }>Signup</Button>
                    </Link>
                    <Link href="/account/login">
                        <Button className={
                            Utilities.Heartbit + " text-white text-xl"
                        }>Login</Button>
                    </Link>
                    <Link href="/news">
                        <Button className={
                            Utilities.Heartbit + " text-white text-xl"
                        }>News</Button>
                    </Link>
                    <Link href="/account/download">
                        <Button className={
                            Utilities.Heartbit + " text-white text-xl"
                        }>Download</Button>
                    </Link>
                    <Link href="/contact">
                        <Button className={
                            Utilities.Heartbit + " text-white text-xl"
                        }>Contact</Button>
                    </Link>
                    <a target="_blank" href="https://discord.gg/CMdHdFWH">
                        <Button className={
                            Utilities.Heartbit + " text-white text-xl"
                        }>Discord</Button>
                    </a>


                    <Link href="/account/profile/donate">
                        <Button color="primary" variant="outlined"
                            className={
                                Utilities.Heartbit + " text-white text-xl ml-2"
                        }>Donate</Button>
                    </Link>
                </Toolbar>
                <Toolbar className="lg:hidden">
                    <Link href="/">
                        <img alt="Digimon Crisis logo" height="75" width="75" src="DigimonCrisis.png"/>
                    </Link>
                    <div className="flex-grow"></div>


                    <IconButton onClick={
                            () => setOpen(true)
                        }
                        size="small">
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Carousel className="-mt-16 "
                showStatus={false}
                showThumbs={false} swipeable={true} 
                showArrows={true}>
                <div>
                    <img className="lg:h-screen select-none" src="events/event-1.jpg"/>
                </div>
                <div>
                    <img className="lg:h-screen select-none	" src="events/event-2.jpg"/>
                </div>
            </Carousel>
            <Drawer 
                anchor="left" 
                classes={{
                    paper : classes.drawerPaper
                }
                }
                open={open}
                onClose={() => setOpen(false)}
                variant="temporary">
                <List> {
                    router.map((item, index) => (
                        <ListItem button
                            key={index}>
                            
                            <ListItemText  primary={<h6 className={Utilities.Heartbit}>{item.name}</h6>}/>
                        </ListItem>
                    ))
                } </List>
                <div  style={{position: "fixed",width:'240px', bottom: 0, textAlign: "center", paddingBottom: 10,}}>
                   <img className="m-auto" alt="Digimon Crisis logo" height="120" width="120" src="DigimonCrisis.png"/>
                </div>
               
            </Drawer>
            <main className="mt-5 lg:p-10 p-5">
                <Container maxWidth="md">
                   <Typography variant="h4" className={Utilities.Akzidenz}>
                       News
                   </Typography>
                   <section>
                       <Grid container spacing={3} className="flex-col-reverse lg:flex-row">
                           <Grid item xs={12} lg={9}>
                               <List>
                                      {
                                          news.filter(n => n.type===filters[filterIndex].code || filters[filterIndex].code === 'all' ).map((n,i) => <Link href={"/news/"+n.id}>
                                         <ListItem button>
                                              <ListItemIcon>
                                               {getNewsIcon(n.type)}
                                              </ListItemIcon>
                                              <ListItemText primary = {n.title} secondary={
                                                  <div className="flex flex-row items-center md:space-x-2">
                                                      <div className="hidden md:block">
                                                      {n.date}
                                                      </div>
                                                      {n.type==="event" && n.progress ? <Chip color="primary" size="small" label="IN PROGRESS"/> : ''}
                                                      <Chip  color="secondary" size="small" label="NEW" icon={<NewReleasesRoundedIcon />}></Chip>
                                                  </div>
                                              }></ListItemText>
                                          </ListItem></Link>)
                                      }
                               </List>
                               <div style={{height:'40px'}}>
                                   
                               </div>
                               <div className="flex justify-center">
                                   <Pagination count={10} variant="outlined" color="primary" />
                               </div>
                               

                           </Grid>
                           <Grid item xs={12} lg={3}>
                               <List subheader={
                                          <ListSubheader component="div" id="nested-list-subheader">
                                                       Filter News
                                          </ListSubheader>
                               }>
                                    {  filters.map( (f,index)  => <ListItem onClick={() => setIndex(index)} key={f.title+index} button selected={ filterIndex === index}>
                                           <ListItemIcon>
                                               {f.icon}
                                           </ListItemIcon>
                                           <ListItemText primary={f.title} />
                                       </ListItem>)}
                              </List>
                           </Grid>
                       </Grid>
                  </section>

            
                </Container>

            </main>

       
         </motion.div>
        </ThemeProvider>
</>
    );
}

export default index;
