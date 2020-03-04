//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getGames = (req, res) => {
    const db = req.app.get('db');
    db.get_Games()
    .then(games => res.status(200).json(games))
    .catch(err => console.log(err))
}

// POST
const addGame = (req, res) => {
    const db = req.app.get('db');
    //data off of the body
    const {game} = req.body;
    db.post_Game(game)
    .then(addedGame => res.status(200).json(addedGame))
    .catch(err => console.log(err))
}

//DELETE

//PUT

module.exports = {
    getGames,  
    addGame                 
};
