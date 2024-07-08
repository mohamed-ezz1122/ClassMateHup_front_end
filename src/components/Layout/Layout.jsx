import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useContext } from 'react'
import { MainContext } from '../Context/MainContext.jsx';

import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import { Offline, Online } from 'react-detect-offline';

export default function Layout() {
  const {mode}=useContext(MainContext)
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return <>
  <ThemeProvider theme={darkTheme}>
  <CssBaseline />
  <Navbar/>
  <div className="layout">
  <Outlet>
  
 

  </Outlet>
  <div className='offline  position-fixed   text-center p-3  text-danger '>

<Offline ><SignalWifiStatusbarConnectedNoInternet4Icon/> <br /> Check online</Offline>
{/* <Online>mohammmmmmmmmmmmm</Online> */}
</div>

  </div>
  </ThemeProvider>
  
  
  
 
  
  </>
  
}
