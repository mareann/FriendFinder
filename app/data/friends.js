// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Ronny",
    photo: "../images/pic1.jpg",
    gender: 1,
    scores:[1,1,2,3,3,5,5,4,3,2]
  },
    {
    name: "George",
    photo: "../images/pic2.jpg",
    gender: 1,
    scores:[1,2,2,4,3,5,1,4,3,2]
   // scores:["1","1","2","3","4","5","5","4","3","2"]
  },
   {
    name: "Bambi",
    photo: "../images/pic1.jpg",
    gender: 2,
    scores:[1,5,2,1,3,4,5,4,3,2]
  },
   {
    name: "Violet",
    photo: "../images/pic1.jpg",
    gender: 2,
    scores:[1,2,2,4,3,5,1,4,3,2]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
