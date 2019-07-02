import React,{Component} from "react";
import axios from "axios";
//import http from '../../services/httpServices';
import MovieCard from "../projectComm/nestedComponent/moviecard";

const key = '5ff73eef6bd74a64f1ad9b5f606b2854';
//https://api.themoviedb.org/3/movie/upcoming?api_key=' + key +'&language=en-US&page=1';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  movies: []
		};
	  }

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
		  .then(res => {
			//console.log(res);
			const movies = res.data;
			this.setState({ movies });
			//console.log(this.state.movies);
		  });
	  }

	render() { 
	const {movies} = this.state;
		return ( 
			<React.Fragment>
			<div className="container"> 

					{movies.map(movie =>
						<MovieCard key={movie.id} items={movie}/>
					)}
			</div>
			</React.Fragment>
		 );
	}
}
 
export default Home;
