import React from 'react';

const MovieDetails = ({match, history}) => {
    return ( 
        <React.Fragment>
            <div className="container">
            <h3>Movie Title : {match.params.id}</h3>
            <button className="btn btn-ms btn-primary" onClick={()=> history.push('/movies')}> Back</button>
            </div>
        </React.Fragment>
     );
}
 
export default MovieDetails;