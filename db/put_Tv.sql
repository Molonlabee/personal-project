UPDATE tv
SET tv = $1

WHERE
 tv_id = $2;

SELECT * FROM tv;