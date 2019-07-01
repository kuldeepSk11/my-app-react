import React from 'react';
import MovieTableHeader from './movieTableheader';
import MovieTableBody from './movieTableBody';

const Table = ({columns,sortColumn,onShort,data}) => {

    return ( 
       
        <table className="table table-striped table-responsive-set table-hover">

            <MovieTableHeader 
                columns={columns}
                sortColumn={sortColumn}
                onShort={onShort}
                />
                
            <MovieTableBody columns={columns} data={data}/>
                
        </table>
     );
}
 
export default Table;
