import React, {Component} from 'react';
import auth from "../../../services/authService";
import Like from '../../common/like';
import { Link} from 'react-router-dom';
import Table from './table';

class MovieTable extends Component {
    columns =[
      
        {path:'title', lable:'Title',content:movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path:'genre.name', lable:'Genre'},
        {path:'numberInStock', lable:'Stock'},
        {path:'dailyRentalRate', lable:'Rate'},
        {key:'like', content:movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>
        )},
         {key: "delete",
        content: movie => (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm">Delete</button>)}
    ];

    // deleteColumn = {
    //     key: "delete",
    //     content: movie => (
    //       <button
    //         onClick={() => this.props.onDelete(movie)}
    //         className="btn btn-danger btn-sm"
    //       >
    //         Delete
    //       </button>
    //     )
    //   };

      constructor() {
        super();
        const user = auth.getCurrentUser();
        if (user && user.isAdmin) this.columns.push(this.deleteColumn);
      }

    render() { 
        const {movies, onShort, sortColumn} = this.props;
        return ( 
                <Table
                   columns={this.columns}
                   data={movies}
                   sortColumn={sortColumn}
                   onShort={onShort} 
                />
         );
    }
}
 
export default MovieTable;