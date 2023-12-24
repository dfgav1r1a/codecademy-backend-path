--1
SELECT * FROM startups;

--2
SELECT COUNT(*) AS 'total_companies' FROM startups;

--3
SELECT SUM(valuation) AS 'total_valuation_column' FROM startups;

--4/5
SELECT MAX(raised) FROM startups
WHERE stage = 'Seed';

--6
SELECT name, MIN(founded) FROM startups;

--7/8/9/10
SELECT category, ROUND(AVG(valuation), 2) AS 'avg_valuation' FROM startups
GROUP BY 1
ORDER BY ROUND(AVG(valuation), 2) DESC;

--11/12
SELECT category, COUNT(*) AS '#_of_ companies' FROM startups
GROUP BY 1
HAVING COUNT(*) > 3;

--13/14
SELECT location, AVG(employees) FROM startups
GROUP BY 1
HAVING AVG(employees) > 500;
