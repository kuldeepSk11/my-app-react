import React, { Component } from 'react';  

class MovieTableHeader extends Component {
    raiseSort = path =>{
        const sortColumn ={ ...this.props.sortColumn};
        if(sortColumn.path === path)
        sortColumn.order= (sortColumn.order === 'asc') ? 'desc':'asc';
        else{
            sortColumn.path = path;
            sortColumn.order= 'asc'
        }
        this.props.onShort(sortColumn);
    }

    renderSortIcon = column =>{
        const { sortColumn } = this.props;
        if(column.path !== sortColumn.path) return null;
        if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-asc"></i>;
    }

    render() { 
        return ( 
            <thead className="thead-dark">
                <tr>
                    {this.props.columns.map(column => (
                    <th 
                    key={column.path || column.key} onClick={()=> 
                    this.raiseSort(column.path)}>
                    {column.lable}
                    {this.renderSortIcon(column)}
                    </th>))}
                    

                {/* <th onClick={()=> this.raiseSort('_id')} scope="col">No.</th>
                <th onClick={()=> this.raiseSort('title')} scope="col">Title</th>
                <th onClick={()=> this.raiseSort('genre.name')} scope="col">Genre</th>
                <th onClick={()=> this.raiseSort('numberInStock')} scope="col">Stock</th>
                <th onClick={()=> this.raiseSort('dailyRentalRate')} scope="col">Rate</th>
                <th scope="col">Details</th>
                <th scope="col">Action</th> */}
                
                </tr>
            </thead>
         );
    }
}
 
export default MovieTableHeader;