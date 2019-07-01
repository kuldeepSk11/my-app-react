import React, { Component } from 'react';
import axios from "axios";
import ArticleCard from "../projectComm/nestedComponent/articlecard";

const key = '5ff73eef6bd74a64f1ad9b5f606b2854';
//https://api.themoviedb.org/3/movie/upcoming?api_key=' + key +'&language=en-US&page=1';

class ArticleCom extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  posts: []
		};
	  }

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
		  .then(res => {
			const posts = res.data;
			this.setState({ posts });
		  });
	  }
	render() { 
		console.log(this.state.posts);
		return ( 
			<React.Fragment>
			<div className="container"> 
		
			{this.state.posts.map(post =>

				<ArticleCard key={post.id} item={post}/>
			)}
			</div>
			</React.Fragment>
		 );
	}
}
 
export default ArticleCom;