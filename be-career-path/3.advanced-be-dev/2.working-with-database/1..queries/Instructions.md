## Write the following queries:

- [x] TASK 1

Start by getting a feel for the `nomnom` table:

```sql
SELECT *FROM nomnom;
```

What are the column names?

- [x] TASK 2

What are the distinct `neighborhood`s?

- [x] TASK 3

What are the distinct `cuisine` types?

- [x] TASK 4

Suppose we would like some `Chinese` takeout.

What are our options?

- [x] TASK 5

Return all the restaurants with `review`s of 4 and above.

- [x] TASK 6

Suppose Abbi and Ilana want to have a fancy dinner date.

Return all the restaurants that are `Italian` and `$$$`.

- [x] TASK 7

Your coworker Trey can’t remember the exact name of a restaurant he went to but he knows it _contains_ the word ‘meatball’ in it.

Can you find it for him using a query?

- [x] TASK 8

Let’s order delivery to the house!

Find all the close by spots in `Midtown`, `Downtown` or `Chinatown`.

(`OR` can be used more than once)

- [x] TASK 9

Find all the `health` grade pending restaurants (empty values).

- [x] TASK 10

Create a Top 10 Restaurants Ranking based on `review`s.

- [x] TASK 11

Use a `CASE` statement to change the rating system to:

- `review > 4.5` is Extraordinary
- `review > 4` is Excellent
- `review > 3` is Good
- `review > 2` is Fair
- Everything else is Poor

Don’t forget to rename the new column!