//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getGames = (req, res) => {
    const db = req.app.get('db');
    db.get_Games()
    .then(games => res.status(200).json(games))
    .catch(err => console.log(err))
}

//PUT
// const postGame = (req, res) => {
//     const db = req.app.post('db');
//     db.post_Game()
//     .then(games => res.status(200).json(games))
//     .catch(err => console.log(err))
// }
 
module.exports = {
    getGames   
    // postGame                  
};
