import React from 'react';
import Joi from 'joi-browser';
import Form from '../admin/nestedCommponet/form';
import { getMovie, saveMovie } from '../../services/movieService';
import { getGenres } from '../../services/genreService';
//import { getMovies, saveMovie } from './services/fakeMovieService';
//import { getGenres } from './services/fakeGenreService';

class AddMovie extends Form {
    state ={
        data:{
            title:"",
            genreId:"",
            numberInStock:"",
            dailyRentalRate:""
        },
        genres:[],
        errors:{}
    };

    schema ={
        _id: Joi.string(),
        title: Joi.string()
        .required()
        .label("Title"),
        genreId: Joi.string()
        .required()
        .label("Genre"),
        numberInStock: Joi.number()
        .required()
        .min(0)
        .max(100)
        .label("Number In Stock"),
        dailyRentalRate: Joi.number()
        .required()
        .min(0)
        .max(10)
        .label("Daily Rental Rate"),
    }

    async populateGenres() {
        const { data: genres } = await getGenres();
        this.setState({ genres });
      }
    
      

    async componentDidMount() {
        await this.populateGenres();
      }

    mapToViewModel(movie){
        return{
            _id:movie._id,
            title:movie.title,
            genreId:movie.genre._id,
            numberInStock:movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate
        }
    }

    doSubmit = async () => {
      await saveMovie(this.state.data);
  
      this.props.history.push("/movies");
    };

    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center"> Add Moive</h1>
                    <hr/>
                    <br/>
                    <div className="col-6 offset-3">
                    <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title","Title")}
                    {this.renderSelect("genreId","Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}

                    </form>
                    </div>
                    </div>
            </React.Fragment>
         );
    }
}
 
export default AddMovie;