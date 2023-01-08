## Project Setup
1. From the root, run `npm i`

## Running the Project
1. Run the project with nodemon using this command: `nodemon app.js`
2. Navigate to `http://localhost:3000/` in your browser

## Things to Note:
1. I think the main problem you guys were facing was forgetting to render your homepage. Take a look in app.js at how I'm reading from the `reviewData.json` file and then setting it to 'reviews'. In your project, this is supposed to happen in the 'homeRoutes.js' file, but no data is being set for homepage.
**If this were a real app, you'd want to read from your database so you're always getting updated reviews.

2. The other thing is to make sure that in your `homepage.handlebars` file, you're referencing the correct properties. It looks like you're trying to reference `review.name`, `review.text` and `review.email`, but those properties don't exist in your json file. So you'll either want to add them to the json file or reference different data.