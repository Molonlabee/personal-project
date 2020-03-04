//FUNCTION TO ENDPOINTS IN INDEX.JS

//GET
const getBooks = (req, res) => {
     const db = req.app.get('db');
    db.get_Books()
    .then(books => res.status(200).json(books))
    .catch(err => console.log(err))
}
// POST
const addBook = (req, res) => {
    const db = req.app.get('db');
    //data off of the body
    const {book} = req.body;
    db.post_Book(book)
    .then(addedBook => res.status(200).json(addedBook))
    .catch(err => console.log(err))
}
// DELETE
const deleteBook = (req, res) => {
    const db = req.app.get('db')
    const books_id = +req.params.books_id

    db.delete_Book(book_id).then(response => {
        res.status(200).json(response)
    })
}
//PUT
const updateBook = (req, res) => {
    const db = req.app.get('db')
    const {books} = req.body
    const books_id = +req.params.books_id

    db.updateUsers([books, books_id]).then(response => {
        res.status(200).json(response)
    })
}
 
module.exports = {
    getBooks,
    addBook,
    deleteBook,
    updateBook                 
};