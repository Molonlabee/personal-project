UPDATE photos
SET photo = $1

WHERE
 photo_id = $2;

SELECT * FROM photos;