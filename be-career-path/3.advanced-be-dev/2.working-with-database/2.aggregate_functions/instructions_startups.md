### Trends in Startups
#SQL #databases #db-project 

Howdy! It’s your first day as a [TechCrunch](https://techcrunch.com/) reporter. Your first task is to write an article on the rising trends in the startup world.

To get you started with your research, your boss emailed you a **project.sqlite** file that contains a table called `startups`. It is a portfolio of some of the biggest names in the industry.

Write queries with aggregate functions to retrieve some interesting insights about these companies.

What are you waiting for? Let’s get started!
### Tasks

- [x] Getting started, take a look at the `startups` table:

	```
	SELECT *FROM startups;
	```

	How many columns are there?

- [x] Calculate the total number of companies in the table.

- [x] We want to know the total value of all companies in this table.
	Calculate this by getting the `SUM()` of the `valuation` column.

- [x] What is the highest amount raised by a startup?
	Return the maximum amount of money `raised`.

- [x] Edit the query so that it returns the maximum amount of money `raised`, during ‘Seed’ stage.

- [x] In what year was the oldest company on the list founded?

## Let's find out the valuations among different sectors:

- [x] Return the average `valuation`.

- [x] Return the average `valuation`, in each `category`.

- [x] Return the average `valuation`, in each `category`.
	Round the averages to two decimal places.

- [x] Return the average `valuation`, in each `category`.
	Round the averages to two decimal places.
	Lastly, order the list from highest averages to lowest.
## What are the most competitive markets?

- [x] First, return the name of each `category` with the total number of companies that belong to it.

- [x] Next, filter the result to only include categories that have more than three companies in them.
	What are the most competitive markets?
## Let's see if there's a difference in startups sizes among different locations:

- [x] What is the average size of a startup in each `location`?

- [x] What is the average size of a startup in each `location`, with average sizes above 500?