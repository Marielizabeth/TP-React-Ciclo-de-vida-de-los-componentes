import React from 'react';
 
const Tablerow = ({title, length, rating, genre, awards}) => {
    return (
        <tr>
          <td>{title}</td>
          <td>{length}</td>
          <td>{rating}</td>
          {
              genre
              ?
              <td>{genre.name}</td>
              :
              <td className="text-danger">sin género</td>

          }           
          <td>{awards}</td>  
             
    </tr>
    );
}

Tablerow.defaultProps = {
    genre : 'sin género'
}

 
export default Tablerow;