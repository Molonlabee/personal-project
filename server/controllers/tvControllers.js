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
const deleteTv = (req, res) => {
    const db = req.app.get('db')
    const tv_id = +req.params.books_id

    db.delete_tv(tv_id).then(response => {
        res.status(200).json(response)
    })
}
//PUT
const updateTv = (req, res) => {
    const db = req.app.get('db')
    const {tv} = req.body
    const tv_id = +req.params.tv_id

    db.updateTv([tv, tv_id]).then(response => {
        res.status(200).json(response)
    })
}
 
module.exports = {
    getTv,
    addTv,
    deleteTv,
    updateTv              
};