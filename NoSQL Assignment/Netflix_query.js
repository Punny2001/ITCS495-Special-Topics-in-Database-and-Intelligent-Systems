use netflix_db

db.Netflix.find({})

db.Netflix.find({
    $and: [
        {$or: [
            {rating: 'TV-14'}, 
            {rating: 'PG-13'}
            ]
        }, 
        {$or: [
            {genres: {$regex: /International.*/}},
            {title: {$regex: /^h.*/}}
            ]
        }
    ]
},
{
    type: 1, title: 1, director: 1, rating: 1, genres: 1, description: 1
}).sort({ title:-1 })

