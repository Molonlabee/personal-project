//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getPhotos = (req, res) => {
    const db = req.app.get('db');
    db.get_Photos()
    .then(photos => res.status(200).json(photos))
    .catch(err => console.log(err))
}


 
module.exports = {
    getPhotos  
                      
};