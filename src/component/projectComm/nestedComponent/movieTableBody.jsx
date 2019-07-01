import React, { Component } from 'react';
import _ from 'lodash';

class MovieTableBody extends Component {
    rendcell = (item, column) =>{
        if(column.content) return column.content(item);
        return _.get(item, column.path);
    }

    createKey=(item, column)=>{
        return item._id + (column.path || column.key);
    }

    render() { 

        const {data, columns} = this.props
        return ( 
            <tbody>
                    {data.map(item => 
                        <tr key={item._id}>
                           {columns.map(column => <td key={this.createKey(item, column)}>{this.rendcell(item, column)}</td> )} 
                        </tr>
                       
                    )}

                        {/* <tr key={movie._id}>
                            <td >{movie.movieid}</td>
                            <td >{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>like</td>
                            <td> <button onClick={()=> onDelete(movie)} className="btn btn-danger btn-sm">View</button> </td>
                            <td> <button onClick={()=> this.handlerDelete(movie)} className="btn btn-danger btn-sm">Delete</button> </td>
                        </tr> */}
            </tbody>
         );
    }
}
 
export default MovieTableBody;