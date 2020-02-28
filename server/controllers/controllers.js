
//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getPost = (req, res) => {
    const db = req.app.get('db');
    db.get_Post()
    .then(post => res.status(200).json(post))
    .catch(err => console.log(err))
}

module.exports = {
     getPost
                                    
};