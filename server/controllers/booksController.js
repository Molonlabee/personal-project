//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getBooks = (req, res) => {
    const db = req.app.get('db');
    db.get_Books()
    .then(books => res.status(200).json(books))
    .catch(err => console.log(err))
}

 
module.exports = {
    getBooks                  
};