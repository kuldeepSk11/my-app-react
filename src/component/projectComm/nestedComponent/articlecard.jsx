import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SheroesLogo from '../../../images/search-result-head-bg.png';

const useStyles = makeStyles({
    card: {
	maxWidth: 345,
	// float:"left",
	// margin:"20px 20px 0px 10px"
    },
    media: {
	height: 140,
    },
});
  
  
const ArticleCard = ({item}) => {
	//console.log(item);
	//const post = this.props;
	//console.log(post);
	const {post} = item;
	const classes = useStyles();
	
	return (
	<div className="articleCard">
	  <Card className={classes.card}>
		<CardActionArea>
		  <CardMedia
			className={classes.media}
			image={SheroesLogo}
			title="Contemplative Reptile"
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			{item.name} 
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			{item.email} 
			</Typography>
		  </CardContent>
		</CardActionArea>
		<CardActions>
		  <Button size="small" color="primary">
			Share
		  </Button>
		  <Button size="small" color="primary">
			Learn More
		  </Button>
		</CardActions>
	  </Card>
	  </div>
	);
  }

/*
// this function is old function
function ArticleCom (){

	return <h3> Article Components</h3>

}*/

//myexport components type 
//export const ArticleCom = () => <h3> Article Components</h3> // exmaple:- import {ArticleCom} from '../components/articles'; 

// arrow function 
// const ArticleCom = () => {
// 	return (
// 			<a></a>
// 			);
// }

//const ArticleCom = () => <div className="container"><h3> Article Components</h3></div>

export default ArticleCard;

