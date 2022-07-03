import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import downloadpdf from '../../../images/pdf/Sozib Hossain Resume.pdf';
import './Navigation.css';
import {useTheme } from '@mui/material';
import {makeStyles} from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {
    const theme = useTheme();

    const useStyle = makeStyles ({
        NavIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important',
                backgroundColor: "#59C378 !important",
            }
        },
        navMenu: {
            [theme.breakpoints.down('md')]: {
                display: 'none !important',
            }
        }
    })

    const {NavIcon, navMenu} = useStyle();

    const [state, setState] = React.useState(false);
    
      const list = (
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
              <ListItem>
                  <ListItemText>
                        <NavLink style={{ textDecoration: 'none', color: '#000' }} to="/home">
                            <Button color="inherit">Home</Button>
                        </NavLink>
                  </ListItemText>
              </ListItem>
              <ListItem>
                  <ListItemText>
                    <NavLink style={{ textDecoration: 'none', color: '#000' }} to="/about">
                                <Button color="inherit">About US</Button>
                            </NavLink>
                  </ListItemText>
              </ListItem>
              <ListItem>
                  <ListItemText>
                    <NavLink style={{ textDecoration: 'none', color: '#000' }} to="/contactf">
                                <Button color="inherit">Contact</Button>
                            </NavLink>
                  </ListItemText>
              </ListItem>
              <ListItem>
                  <ListItemText>
                        <NavLink style={{ textDecoration: 'none', color: '#000' }} to="/blog">
                                <Button color="inherit">Blog</Button>
                            </NavLink>
                  </ListItemText>
              </ListItem>
          </List>
        </Box>
      );
      

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{backgroundColor: '#070640', justifyContent: 'space-between'}}>
                <Toolbar>
                
                
             
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                            SOZIB
                            </NavLink>
                        </Typography>
                  
                 
                        <Box className= {navMenu}>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
                                <Button color="inherit">About US</Button>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/contactf">
                                <Button color="inherit">Contact</Button>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/blog">
                                <Button color="inherit">Blog</Button>
                            </NavLink>
                        </Box>
                 
                   
                        <Box>
                        <a href={downloadpdf} download="downloadpdf" style={{ textDecoration: 'none', color: 'white' }}><Button color="success" variant="contained">RESUME <DownloadIcon style={{fontSize: '20px'}}/></Button></a>
                        </Box>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    
                    sx={{ mr: 2 }}
                    className= {NavIcon}
                    onClick={() => setState(true)}
                >
                    <MenuIcon />
                </IconButton>
                 
                
                </Toolbar>
            </AppBar>
        </Box>
            <div>
                    <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                    </React.Fragment>
            </div>
        </div>
        
    );
};

export default Navigation;