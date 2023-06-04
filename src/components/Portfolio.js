import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto"
  },
  techStackFont: {
    marginLeft: "4px",
    color: "#4c5cf9",
    fontWeight: "5px"
  },
}));

const projects = [
  {
    name: "Timely clone",
    description: `Created a responsive clone website of Timely.com. The user can track time, integrate their calendar. The app helps in enhancing productivity. site has a sign up/login page.`,
    image: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_8b44eeefb881a1f431147b5fcba24122/timely-time-tracking.png",
    live: "https://timelyapp-clone.netlify.app/",
    url: "https://github.com/azhar982111/Timely-clone",
    stack: "Html | Css | Javascript | React | Redux | Material ui"

  },
  {
    name: "Spotify clone",
    description: `Created a clone of spotify.com and the site has a login and signup page. After logging in the user can see the different category of music and can also play the songs.The site is also responsive.`,
    image: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png ",
    live: "https://spotify-webapp-clone.netlify.app/",
    url: "https://github.com/azhar982111/Spotify-Clone",
    stack: "Html | Css | Javascript"
  },
  {
    name: "Policy bazar clone",
    description: `Created a responsive clone website of policybazar.com. The user can see differnt policy and buy them. The site has a sign up/login page and add to car page.`,
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/26/full/1530007716-0302.jpg?im=Resize,width=640",
    live: "https://ploicybazarclone.netlify.app/",
    url: "https://github.com/azhar982111/Policy-bazar-clone",
    stack: "Html | Css | Javascript"
  },
  {
    name: "India Today clone",
    description: `Made a responsive clone website of India Today using html, css and javascript,created a live tv section where the user will be able to see the live feeds from India today and also has dashboard section.`,
    image: "https://user-images.githubusercontent.com/90378786/181925792-c2ce7e35-ceca-4325-b4c9-f242c40fa49f.jpg",
    live: "https://indiatodayclone.netlify.app/pages/livetv",
    url: "https://github.com/azhar982111/INDIA-TODAY-CLONE",
    stack: "Html | Css | Javascript"
  }
];


const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>window.open(project.live, '_blank')} >
                  Live Demo
                </Button>
                <GitHubIcon onClick={()=>window.open(project.url, '_blank')}/>
              </CardActions>
              <CardActions className={classes.techStackFont}>
                <Typography variant="subtitle2" gutterBottom>
                    {project.stack}
                  </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
