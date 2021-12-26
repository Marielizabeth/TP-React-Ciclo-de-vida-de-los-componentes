import React, { Component } from 'react';
import Genre from './Genre';
 
class  Genresindb extends Component {

    constructor(){
        super();
        this.state= {
            genresList : [] //estado inicial

        }

    }

    render() { 
        return (
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                       { 
                            this.state.genreList.map((genre,index) => {
                           return <Genre
                            key={genre.name + index}
                            name= {genre.name}
                            />
                        })
                        }    

                    </div>
                </div>
            </div>
        </div>
        );
    }
 
    async componentDidMount(){
        await this.apiCall('http://localhost:3001/api/genres', this.getGenres)
        console.log(this.state)
    }

    async apiCall (url, handler){
        try {
            let response = await fetch(url);
            let result = await response.json() //respuesta API parseada con JSON
            handler(result)
        } catch (error) {
            console.log(error)
            
        }
    
    }

    getGenres = info =>{
        this.setState({
            genresList : info.data
        })
    } 


}


 
export default Genresindb;