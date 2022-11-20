const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const movies = [
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
        "id" : 11,
        "name" : "movie 11",
        "rating" : 4,
        "released_date" : "01/11/2010"
    },

    {   
        "id" : 12,
        "name" : "movie 12",
        "rating" : 4,
        "released_date" : "01/12/2010"
    },

    {   
        "id" : 13,
        "name" : "movie 13",
        "rating" : 2,
        "released_date" : "01/03/2010"
    },

    {   
        "id" : 14,
        "name" : "movie 14",
        "rating" : 4,
        "released_date" : "01/02/2010"
    },

    {   
        "id" : 15,
        "name" : "movie 15",
        "rating" : 3,
        "released_date" : "01/15/2010"
    },

    {   
        "id" : 16,
        "name" : "movie 16",
        "rating" : 4,
        "released_date" : "01/16/2010"
    },

    {   
        "id" : 17,
        "name" : "movie 17",
        "rating" : 3,
        "released_date" : "01/12/2010"
    },

    {   
        "id" : 18,
        "name" : "movie 18",
        "rating" : 4,
        "released_date" : "01/18/2010"
    },
    {   
        "id" : 19,
        "name" : "movie 19",
        "rating" : 4,
        "released_date" : "01/19/2010"
    },
    {   
        "id" : 20,
        "name" : "movie 20",
        "rating" : 4,
        "released_date" : "01/20/2010"
    },


    

]
app.get('/movies', function (req, res) {
  res.status(200).send(
      {
          movies,
          "message" : "success!"
      }
  )
})

app.post('/add-movie', function (req, res) {

   const {name,release_date, rating } = req.body;
    
  
    if(!name)
    return res.status(400).send({"message":"Name Is Required!"})
    if(!release_date)
    return res.status(400).send({"message":"Release Date Is Required!"})
    if(!rating)
    return res.status(400).send({"message":"Rating Is Required!"})

    // save and Get Movie Movie Here!
    // 

    res.status(200).send(
        {
            movies,
            "message" : "success!"
        }
    )
  })

app.listen(4000, () => console.log("server running!"))