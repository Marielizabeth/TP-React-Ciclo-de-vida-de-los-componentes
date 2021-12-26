import React, { Component } from 'react'; 
import Contentrowmovies from './ContentRowMovies';
import Genresindb from './GenresInDb';
import Lastmovieindb from './LastMovieInDb';


class Contentrowtop extends Component {

    constructor(){
        super();
        this.state = {
            movies : {
                color : "primary",
                title: "Movies in Data Base",
                amount: "",
                icon: "fas fa-film",
            },
            awards: {
                color : "success",
                title: "Total Awards",
                amount: "",
                icon: "fas fa-award",

            },
            actors: {
                color : "warning",
                title: "Actors quantity",
                amount: "",
                icon: "fas fa-user",

            }           


        }
    }
    render(){

     return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="row">

                <Contentrowmovies
                    {...this.state.movies}
                />             
            </div>           
 
            <div className="row">

                <Lastmovieindb/>

                <Genresindb />
            </div>
        </div>
    )
};

    async apiCall (url, handler){
        try {
            let response = await fetch(url);
            let result = await response.json() //respuesta API parseada con JSON
            handler(result)
        } catch (error) {
            console.log(error)
            
        }
    }

    getTotalMovies = (info) =>{
        this.setState({
            movies : {
                ...this.state.movies,
                amount: info.data,
            },
        })
    }

    async componentDidMount(){
        await this.apiCall('http://localhost:3001/api/movies/total', this.getTotalMovies)
    } 

}

export default Contentrowtop;

