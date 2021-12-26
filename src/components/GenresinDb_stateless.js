import React from 'react';
import Genre from './Genre';

const genres = ["Accion", "Animacion", "Ciencia Ficcion","Comedia", "Documental", "Drama", "Fantasia","Infantiles","Musical","terror"]

const Genresindb = () => {
    /* return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            genres.map((genre,index) => {
                           return <Genre
                            key={genre + index}
                            name= {genre}
                            />
                        })
                        }
                   
                        

                    </div>
                </div>
            </div>
        </div>
    );
} */

export default Genresindb;