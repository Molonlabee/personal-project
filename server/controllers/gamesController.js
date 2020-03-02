//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getGames = (req, res) => {
    const db = req.app.get('db');
    db.get_Games()
    .then(post => res.status(200).json(post))
    .catch(err => console.log(err))
}
 
module.exports = {
    getGames
                             
};