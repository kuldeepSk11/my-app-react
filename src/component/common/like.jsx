import React from 'react';

const Like = props => {
    let likeClass = "fa fa-heart";
        if(!props.liked) likeClass += "-o";
        return ( 
          
                <i onClick={props.onClick} style={{cursor:"pointer"}} className={likeClass} aria-hidden="true"></i>
         
         );
}
 
export default Like;