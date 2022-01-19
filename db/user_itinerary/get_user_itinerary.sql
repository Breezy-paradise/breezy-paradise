SELECT ui.id, ui.day_num, a.name, a.duration_hours, a.price
FROM user_itinerary ui
JOIN attraction a ON a.id = ui.attraction_id
WHERE a.location_id = $1
AND ui.user_id = $2
ORDER BY ui.day_num;
