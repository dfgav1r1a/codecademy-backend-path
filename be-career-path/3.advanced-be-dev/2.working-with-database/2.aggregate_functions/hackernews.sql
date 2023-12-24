

 --1
 SELECT title, score
 FROM hacker_news
 ORDER BY score DESC
 LIMIT 5;
--2
 SELECT SUM(score) AS 'total_scores' FROM hacker_news;
--3
SELECT user, SUM(score) AS 'total_score'
FROM hacker_news
GROUP BY 1
HAVING SUM(score) > 200
ORDER BY SUM(score) DESC;
--4
SELECT (517+ 309+304+282)/6366.0 AS "percentage";
--5
SELECT user, COUNT(*)
FROM hacker_news
WHERE url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
GROUP BY 1
ORDER BY 2 DESC;
--6/7
SELECT CASE
  WHEN url LIKE '%github.com%' THEN 'GitHub'
  WHEN url LIKE '%medium.com%' THEN 'Medium'
  WHEN url LIKE '%nytimes.com%' THEN 'NYT'
  ELSE 'other_source'
END AS 'Source',
COUNT(*)
FROM hacker_news
GROUP BY 1
ORDER BY 2 DESC;
--8
SELECT timestamp
FROM hacker_news
LIMIT 10;
--9
SELECT timestamp, strftime('%H', timestamp) AS 'Hour'
FROM hacker_news
GROUP BY 1
LIMIT 20;
--10/11
SELECT strftime('%H', timestamp) AS 'hour',
  ROUND(AVG(score), 1) AS 'rounded_score'
FROM hacker_news
WHERE ROUND(score) NOT NULL 
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10;






