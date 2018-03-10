// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Ronny",
    photo: "images/pic2.jpg",
    gender: 1,
    scores:[1,3,2,3,3,5,5,4,3,5]
  },
    {
    name: "George",
    photo: "images/pic3.jpg",
    gender: 1,
    scores:[1,3,2,4,3,5,1,4,3,5]
  },
   {
    name: "Bambi",
    photo: "images/pic1.jpg",
    gender: 2,
    scores:[1,5,2,1,3,4,5,4,3,2]
  },
   {
    name: "Violet",
    photo: "images/pic4.jpg",
    gender: 2,
    scores:[1,5,2,4,3,5,1,4,3,2]
  },
   {
    name: "Mike",
    photo: "images/pic6.jpg",
    gender: 1,
    scores:[1,5,2,4,3,5,2,4,4,4]
  },
   {
    name: "Franky",
    photo: "images/pic7.jpg",
    gender: 1,
    scores:[2,5,2,4,3,5,1,4,3,2]
  },
   {
    name: "Becca",
    photo: "images/pic8.jpg",
    gender: 2,
    scores:[2,3,2,4,3,4,1,4,3,1]
  },
   {
    name: "Jonny",
    photo: "images/pic8.jpg",
    gender: 1,
    scores:[2,5,4,5,3,5,1,4,3,5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
