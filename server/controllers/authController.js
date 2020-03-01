const bcrypt = require('bcryptjs');

//REGISTER
const register = (req, res) => {
    const db = req.app.get('db');
    const {username, password, email} = req.body;
    console.log(req.body)
    bcrypt.hash(password, 10).then((hash) => {
            db.register_User([username, hash, email])
            .then(user => {
                
                req.session.user = {
                    id: user[0].id,
                    username: user[0].username,
                    user_email: user[0].email
                };
                console.log("Register authController line 17", req.session.user)
                res.status(200).json(req.session.user)
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json('error')
        })
        .catch(err => {
            console.log(err)
            res.status(500).json('error')
        })
}

//LOGIN
const login = (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body;
    db.get_User(username).then(user => {
        if(user.length === 0) {
            res.status(400).json('user does not exist')
        } else {
            bcrypt.compare(password, user[0].password).then(areEqual => {
                if(areEqual) {
                    const {id, username, email} = user[0]
                    req.session.user = {
                       user_id: id,
                       user_username: username,
                       user_email: email
                    }
                    res.status(200).json(req.session.user)
                } else {
                    res.status(403).json('incorrect username or password')
                }
            })
        }
    })
}

//LOGOUT
const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
}

//LOGIN
const get_User = (req,res) => {
    console.log(req.session)
    res.status(200).json(req.session.user)
}

//EXPORTS
module.exports = {
    register,
    login,
    get_User,
    logout
}