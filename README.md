# Friend Finder - Node and Express Servers

Compatibility-based "FriendFinder" application -- basically a dating app.

This full-stack site takes in results from users' surveys, then compare their answers with those from other users. 

The app will then display the name and picture of the user with the best overall match. 

To Use FriendFinder App 
  Enter the requested information
  Name
  Picture Link
  Gender
 Answer the 10 questions according to your preferences.
Select the Submit button to see your Friend Match!
There are 2 links on each page
API Friends List  click to display the json friends data
GitHub Repo  click to go to the github FriendFinder page
### Details
The survey has 10 questions about activities. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The closest match will be the user with the least amount of difference.
The most compatible friend is displayed as a modal pop-up.

Server.js
 Requires the npm packages: `express`, `body-parser` and `path`.

htmlRoutes.js file 

 Include two routes:
   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays
     the home page. 

apiRoutes.js file  

 Contain two routes:

   * A GET route with the url `/api/friends`. This is used to display a 
     JSON of all possible friends.
   * A POST routes `/api/friends`. This handles incoming survey results.
     This route will also be used to handle the compatibility logic. 

app/data/friends.js is an array of objects. Each of these objects should roughly follow the format below.

```json
{
    name: "Ronny",
    photo: "images/pic2.jpg",
    gender: 1,
    scores:[1,3,2,3,3,5,5,4,3,5]
}

Home.html
  Main page. Select button to go to Survey
Survey.html
 Contains the survey questions and its formatting.

Deployed
https://rocky-brook-24565.herokuapp.com
