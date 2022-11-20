
import './App.css';
import React, {useState, useEffect} from "react";

const Card = ({item, index}) => {
 
  return (
    <>
   <div className="column" key={index}>
    <div className="card">
      <h3>{item.name}</h3>
      <p>Rating: {item.rating}</p>
      <p>Release Date: { item.released_date}</p>
    </div>
  </div>
    </>
    
  )

}

function App() {
  const movieList = [
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
    {   
        "id" : 2,
        "name" : "movie 2",
        "rating" : 3,
        "released_date" : "01/03/2010"
    },
    {   
        "id" : 3,
        "name" : "movie 3",
        "rating" : 3,
        "released_date" : "01/03/2010"
    },
    {   
        "id" : 4,
        "name" : "movie 4",
        "rating" : 4,
        "released_date" : "01/04/2010"
    },
  
    {   
        "id" : 5,
        "name" : "movie 5",
        "rating" : 5,
        "released_date" : "04/01/2010"
    },
  
    {   
        "id" : 6,
        "name" : "movie 6",
        "rating" : 4,
        "released_date" : "01/05/2010"
    },
  
    {   
        "id" : 7,
        "name" : "movie 7",
        "rating" : 3,
        "released_date" : "01/04/2010"
    },
  
    {   
        "id" : 8,
        "name" : "movie 8",
        "rating" : 3,
        "released_date" : "01/01/2005"
    },
  
    {   
        "id" : 9,
        "name" : "movie 9",
        "rating" : 5,
        "released_date" : "01/01/2014"
    },
  
    {   
        "id" : 10,
        "name" : "movie 10",
        "rating" : 4,
        "released_date" : "01/01/2013"
    },
  
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
  
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
  
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
  
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
  
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
  
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
  
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
  
    {   
        "id" : 1,
        "name" : "movie 1",
        "rating" : 4,
        "released_date" : "01/01/2010"
    },
  
    
  
  ]
const [movies, setMovies] = useState();


  const getMovieList = () => {
   
    fetch('http://localhost:4000/movies')
        .then(response => response.json())
        .then(data =>{
          setMovies(data.movies)
          console.log('data',data.movies)
        } );

  }
  useEffect(() => {
    getMovieList();
  },[])


  return (
    <div className="App">
      <header className="App-header">
       
        <h3>Movies List</h3>
      </header>
      <div  className= "container">
      <div className="row">
          {
           movies&& movies.map((item, index) => {
              return(
              
                <Card item={item} index= {index}/>
               
              )
            })
          }
          </div>
         
      </div>
    </div>
  );
}

export default App;
