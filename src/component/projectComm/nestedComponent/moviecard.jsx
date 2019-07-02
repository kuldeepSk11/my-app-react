import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SheroesLogo from '../../../images/search-result-head-bg.png';


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  
  
  
const MovieCard = ({items}) => {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  //const {post} = items;
  
  function handleExpandClick() {
    setExpanded(!expanded);
  }
	
	
	return (
	<div className="articleCard">
	  <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {items.vote_count}
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={items.title}
        subheader={items.release_date}
      />
      <CardMedia
        className={classes.media}
        image={SheroesLogo}
        title="Paella dish"
      />
      <CardContent>
        <Typography className="movie-card-overview" variant="body2" color="textSecondary" component="p">
        {items.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Other Details:</Typography>
          <Typography>
            Vote Count : {items.vote_count}
          </Typography>
          <Typography>
            Vote Average : {items.vote_average}
          </Typography>

          <Typography>
          Popularity : {items.popularity}
          </Typography> 

          <Typography>
          Adult : {items.adult}
          </Typography> 
    
        </CardContent>
      </Collapse>
    </Card>
	  </div>
	);
  }

export default MovieCard;

