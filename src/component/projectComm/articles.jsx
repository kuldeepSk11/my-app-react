import React from "react";

/*
// this function is old function
function ArticleCom (){

	return <h3> Article Components</h3>

}*/

//myexport components type 
//export const ArticleCom = () => <h3> Article Components</h3> // exmaple:- import {ArticleCom} from '../components/articles'; 

// arrow function 
// const ArticleCom = () => {
// 	return (
// 			<div>hello</div>
// 		)
// }

const ArticleCom = () => <div className="container"><h3> Article Components</h3></div>

export default ArticleCom;

