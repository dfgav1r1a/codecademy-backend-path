### Create a Table

In this project, you will create your own `friends` table and add/delete data from it!

The instructions provided are a general guideline. Feel free to add more columns, insert more data, and create more tables.

After completing the instructions for each Task below, click the “Save” button to check your progress. If nothing populates in the “Query Results” tab to the right, double-check your work for syntax errors.

If you get stuck during this project or would like to see an experienced developer work through it, click **Get Unstuck** to see a walkthrough video.
### Tasks

Mark the tasks as complete by checking them off

Create a table named `friends` with three columns:

- `id` that stores `INTEGER`
- `name` that stores `TEXT`
- `birthday` that stores `DATE`

2. Beneath your current code, add Ororo Munroe to `friends`.
Her birthday is May 30th, 1940.

3. Let’s make sure that Ororo has been added to the database:

```
SELECT * FROM friends;
```

Check for two things:

- Is `friends` table created?
- Is Ororo Munroe added to it?

4. Add two of your friends to the table. Insert an `id`, `name`, and `birthday` for each of them.

5. Ororo Munroe just realized that she can control the weather and decided to change her name. Her new name is “Storm”.

Update her record in `friends`.

6. Add a new column named `email`.

7. Update the email address for everyone in your table. Storm’s email is `storm@codecademy.com`.

8. Wait, Storm is fictional… Remove her from `friends`.

9. Great job! Let’s take a look at the result