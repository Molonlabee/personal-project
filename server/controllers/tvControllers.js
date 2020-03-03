//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getTv = (req, res) => {
    const db = req.app.get('db');
    db.get_Tv()
    .then(tv => res.status(200).json(tv))
    .catch(err => console.log(err))
}

 
module.exports = {
    getTv               
};