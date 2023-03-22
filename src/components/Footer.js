import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<GitHubIcon onClick={()=>window.location.href = "https://github.com/azhar982111"}/>} className={classes.root} />
      <BottomNavigationAction icon={<LinkedInIcon onClick={()=>window.location.href = "https://www.linkedin.com/in/azhar-hussain98211/"}/>} className={classes.root} />
      <BottomNavigationAction icon={<EmailIcon onClick={()=>window.location.href = "mailto:azhar982111@gmail.com"}/>} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
