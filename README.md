# Flask and `create-react-app`

## Requirements
1. `npm install`
2. `pip install -r requirements.txt`

## Run Application
1. Run command in terminal (in your project directory): `npm run build`. This will update anything related to your `App.js` file (so `public/index.html`, any CSS you're pulling in, etc).
2. Run command in terminal (in your project directory): `python3 app.py`
3. Preview web page in browser 'localhost:8080/' (or whichever port you're using)

## Deploy to Heroku
1. Create a Heroku app: `heroku create --buildpack heroku/python`
2. Add nodejs buildpack: `heroku buildpacks:add --index 1 heroku/nodejs`
3. Push to Heroku: `git push heroku main`


# Milestone 3

## secret files
touch .env creates the .env file and in that file is where you export and paste your client id and secret client id from spotify and the genius token generated from genius api

You would also add the postgres link for the database

ex).export [name of key] = "[key]'

## Questions to be Answered
What are at least 3 technical issues you encountered with your project? How did you fix them? 

A problem I had when I was doing the project was I was getting an error with the database where it says the metadata user was already defined. I fixed it by removing a duplicated import that I had when I was merging the code together with the starter code.

Another problem that I ran into was whenever I input an artist id, the information of the artist's song would not display. I realized I had has_artist_saved set equal to false when I should have made it true.

Another problem I ran into while trying to get the list of the artist id was when the page would not load and print the artist id. So to fix this I used print statements and linked it to the button that was used in the starter code to see the contents in console of the react page.

What part of the stack do you feel most comfortable with? What part are you least comfortable with?

I think that I was not super comfortable all around, but maybe adding into the database made the most sense to me. Connecting to react and deleting from database and even displaying the delete button next to each artist id was tough.
