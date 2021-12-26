import React, { Component } from 'react';
import Tablerow from './TableRow';

class Table extends Component {

    constructor () {
        super()
        this.state = {
            movies : []
        }
    }

    render() {
        return (
            <div className="container bg-white">
            <table className="table table-bordered"> 
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.movies.map((movie,index)=>{
                            return (<Tablerow
                                key={movie.title + index}
                                title = {movie.title}
                                rating = {movie.rating}
                                genre = {movie.genre}
                                awards = {movie.awards}
                            />
                            )
                        })
                    }
                </tbody>
            </table> 
        </div>
        );
    }
  
    async componentDidMount(){
        await this.apiCall("http://localhost:3001/api/movies",this.getMovies);
        console.log(this.state)
    }

    async apiCall(url, handler){
        try {
            let response = await fetch(url);
            let result = await response.json();
            handler(result) 
        } catch (error) {
            console.log(error);
        }
    }

    getMovies = info => {
        this.setState(
            {
                movies : info.data
            }
        )
    }
}

export default Table;
