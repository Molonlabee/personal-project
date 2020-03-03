SELECT * FROM post p

INNER JOIN users u
ON p.user_id = u.id

INNER JOIN photos ph 
ON ph.photos_id = p.photo_id

INNER JOIN games g
ON g.games_id = p.game_id

INNER JOIN books b 
ON b.books_id = p.books_id

INNER JOIN tv t
ON t.tv_id = p.tv_id

-- GETS ALL USER POST (FOR MOODS PAGE)
WHERE u.id = $1;