import * as React from 'react';
import './Post.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Comment, Delete, Update } from '@mui/icons-material';
import { Badge, Link, Menu, MenuItem } from '@mui/material';
import Comments from '../Comment/Comments.jsx';
import { Postcontext } from '../Context/PostContect.jsx';
import { showModelToDelete, showupdateModel } from '../../utils/Post.js';
import { userContext } from '../Context/userContext.jsx';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function Post({postObj}) {
  const [expanded, setExpanded] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const {token,isAdmin}=React.useContext(userContext)
  const {setPost,posts} =React.useContext(Postcontext)
  const [favStatus, setFavStatus] = React.useState(false)

  ///work function ==========>
    //add fav function==>
      const cheingFavIcon=()=>{
        if(favStatus){
          setFavStatus(false)
          
        }
        if(!favStatus){
          setFavStatus(true)
        }
        console.log(favStatus);
      }
      
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  ///////////////////////==============================================
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    > 
      
      <MenuItem onClick={()=>{handleProfileMenuOpen,showupdateModel({preTitle:postObj.title,preContent:postObj.content,postId:postObj._id,token,updater:setPost})}}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
        >
          <Update />
        </IconButton>
        <span className='text-primary'>Update</span>
      </MenuItem>
      <MenuItem onClick={()=>{showModelToDelete({updater:setPost,token,postId:postObj._id}),handleProfileMenuOpen}}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
        >
          <Delete />
        </IconButton>
        <span className='text-primary'>Delete</span>
      </MenuItem>
    </Menu>
     
  );

  return (<>
  
    <Card sx={{ marginInline:"auto",marginBottom:"20px" ,maxWidth:"90%"}} className='card'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg">
            
          </Avatar>
        }
        action={
         isAdmin ? <IconButton aria-label="settings" onClick={handleMobileMenuOpen} >
         <MoreVertIcon />
       </IconButton>:""
        }
        title={postObj.title}
        subheader={postObj.createdAt}
        subjectName={'cloud'}
      />

      
      <CardMedia
        component="img"
        height="194"
        image="https://mui.com//static/images/cards/paella.jpg"
        alt="Paella dish"
      />


      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {
            postObj.content
          }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>{cheingFavIcon()}}>
         {favStatus? <FavoriteIcon />:<FavoriteBorderIcon/>}
        </IconButton>
        <IconButton aria-label="share" onClick={handleExpandClick}>
          <Comment />
        </IconButton>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Comments/>
        </CardContent>
      </Collapse>
      {isAdmin ? renderMobileMenu : ""}  

    </Card>
   
    </>
  );
}
