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
const deletePhoto = (req, res) => {
    const db = req.app.get('db')
    const photos_id = +req.params.photos_id

    db.delete_Photo(photos_id).then(response => {
        res.status(200).json(response)
    })
}
//PUT
const updatePhoto = (req, res) => {
    const db = req.app.get('db')
    const {photos} = req.body
    const books_id = +req.params.books_id

    db.updateUsers([photos, photos_id]).then(response => {
        res.status(200).json(response)
    })
}

module.exports = {
    getPhotos,
    addPhoto,
    deletePhoto,
    updatePhoto  
                      
};