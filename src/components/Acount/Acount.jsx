import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import style from './Acount.module.css'
import { navContext } from '../Context/NavContext.jsx';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import logo from '../../assets/Images/photo_2024-02-20_18-41-52.jpg'


export default function Acount() {
    const {toggleDrawer,state} = React.useContext(navContext)

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400,padding:"20px" }}
      className={style.mainAcount}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <div className="acount d-flex gap-3">
        
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg">
           
            </Avatar>

            <div>
            <span><span className='fw-bold'>Id </span> : jgvyttf6f76t7667</span>
            <h5 className=''> Mohamed ezz</h5>
            <p><span className='fw-bold'> Acadmy Year</span> : <span>frist year</span></p>
            <p><span className='fw-bold'> Divion</span> : <span>General</span></p>
            </div>
                  

      </div>
      
      <ul className='py-5 list-unstyled'>
        <li ><i class="fa-solid fa-camera-rotate"></i>update photo</li>
        <li><i class="fa-solid fa-file-signature"></i>update name</li>
        <li><i class="fa-solid fa-key"></i>changing password</li>
        <li><i class="fa-solid fa-file-signature"></i>changing Acadmy Year </li>
        <li><i class="fa-solid fa-envelope"></i>update email</li>
        <li className={` ${style.delete}`}><i class="fa-solid fa-ban"></i>delete account</li>
        
      </ul>
      <img src={logo} className='w-100' alt="" />
    </Box>
  );

  return (
    <div className='container'>
                  
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} >MY Acount</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
