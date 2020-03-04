//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getTv = (req, res) => {
    const db = req.app.get('db');
    db.get_Tv()
    .then(tv => res.status(200).json(tv))
    .catch(err => console.log(err))
}
// POST
const addTv = (req, res) => {
    const db = req.app.get('db');
    //data off of the body
    const {tv} = req.body;
    db.post_TV(tv)
    .then(addedTv => res.status(200).json(addedTv))
    .catch(err => console.log(err))
}

//DELETE

//PUT

 
module.exports = {
    getTv,
    addTv               
};