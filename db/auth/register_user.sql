INSERT INTO travel_user 
(username, email, password)
VALUES
($1, $2, $3)
returning *;