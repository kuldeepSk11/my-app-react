import React, { Component } from 'react';
import { toast } from "react-toastify";
import Pagination from '../../component/common/pagination';
import ListGroupNav from '../projectComm/nestedComponent/listGroup';
import MovieTable from '../projectComm/nestedComponent/movieTable';
import { getMovies, deleteMovie } from '../../services/movieService';
import { getGenres } from "../../services/genreService";
import { paginate } from '../utils/paginate';
import { Link} from 'react-router-dom';
import _ from 'lodash';
import SearchBox from "../projectComm/searchBox";

class MovieList extends Component {
    state = { 
        movies: [],
        currentPage:1,
        genres:[],
        pageSize:4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn:{
            path:'title',
            order:'asc'
        }
     };


     async componentDidMount() {
        const { data } = await getGenres();
        const genres = [{ _id: "", name: "All Genres" }, ...data];
    
        const { data: movies } = await getMovies();
        this.setState({ movies, genres });
      }

    

      handleDelete = async movie => {
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    
        try {
          await deleteMovie(movie._id);
        } catch (ex) {
          if (ex.response && ex.response.status === 404) console.log("x");
          toast.error("This movie has already been deleted.");
    
          this.setState({ movies: originalMovies });
        }
      };

    //  handlerDelete =  movie => {
    //      //console.log("sdfdsfs");
    //         const movies = this.state.movies.filter( m => m._id !== movie._id);
    //         this.setState({ movies});
    //  };

     
    handleLike = movie =>{
        //console.log("likedd",movie, this.state.movies);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});   
    ;}

    
    handlerPageChange = page =>{
        this.setState({
            currentPage : page
        });
 };

handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };


  handleShort = sortColumn=>{

    this.setState({sortColumn});
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

    render() { 

      //   const {length:count} = this.state.movies;
      //   const {pageSize, currentPage,  sortColumn,selectGenre, searchQuery,  movies: allMovies} = this.state;
        
      //   const filtered = selectGenre &&  selectGenre._id ? allMovies.filter(m => m.genre._id === selectGenre._id) : allMovies;

      //  const shorted =  _.orderBy(filtered,[sortColumn.path], [sortColumn.order]);

      //   const movies= paginate(shorted, currentPage, pageSize );
      //   //console.log(movies,allMovies,pageSize,currentPage);

      //   if(count === 0)
      //   return <p className="messgaeMovieNo">There are no movies in the database</p>

      const { length: count } = this.state.movies;
      const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
      const { user } = this.props;
  
      //if (count === 0) return <p className="messgaeMovieNo">There are no movies in the database.</p>;
  
      const { totalCount, data: movies } = this.getPagedData();


        return ( 
            <div className="container">
                <br/>
                
                <h3 className="text-center">All Movies {totalCount} showing in the database.</h3>
                <br/>
                
                <div className="row">
                        <div className="col-md-4">
                        <Link className="btn btn-primary col-12 p-3"  to="/addMoive">Add Movie</Link>
                        <div className="clearfix"></div><br/>
                            <ListGroupNav 
                                items={this.state.genres} 
                                selectItems={this.state.selectGenre}
                                onItemSelect={this.handleGenreSelect}
                                />
                        </div>

                    <div className="col">

                    <SearchBox value={searchQuery} onChange={this.handleSearch} />

                    <MovieTable 
                        movies={movies} 
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handlerDelete} 
                        onShort={this.handleShort}
                        />    
                    
                    <Pagination 
                    itemsCount={totalCount} 
                    pageSize={pageSize} 
                    currentPage={currentPage}
                    onPageChange={this.handlerPageChange}
                     />

                        </div>
                </div>
            </div>
         );
    }
}
 


export default MovieList;