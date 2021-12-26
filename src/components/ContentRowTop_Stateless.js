import React from 'react';
import Contentrowmovies from './ContentRowMovies';
import Genresindb from './GenresInDb';


const Contentrowtop = () => {

    let data = [
        {
            title : "Movies in Data Base",
            color : "primary",
            amount : 21,
            icon : "fa-film"
        },
        {
            title : "total awards" ,
            color : "success" ,
            amount : 79,
            icon : "fa-award"
        },
        {
            title : "actors quantity" ,
            color : "warning",
            amount : 49,
            icon : "fa-user"
        }

       
    ];

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="row"> 

                {
                    data.map((item, index) => {
                        
                        return <Contentrowmovies
                            key={item.title + index} 
                            title={item.title} 
                            color={item.color} 
                            amount={item.amount} 
                            icon={item.icon} 
                        />

                    })
                }
            </div>

            


            <div className="row">

                

                <Genresindb />
            </div>
        </div>
    );
}

export default Contentrowtop;