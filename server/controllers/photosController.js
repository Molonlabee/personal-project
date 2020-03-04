//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getPhotos = (req, res) => {
    const db = req.app.get('db');
    db.get_Photos()
    .then(photos => res.status(200).json(photos))
    .catch(err => console.log(err))
}
// POST
const addPhoto = (req, res) => {
    const db = req.app.get('db');
    //data off of the body
    const {photo} = req.body;
    db.post_Photo(photo)
    .then(addedPhoto => res.status(200).json(addedPhoto))
    .catch(err => console.log(err))

}
//DELETE

//PUT

module.exports = {
    getPhotos,
    addPhoto  
                      
};