// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    "name":"Tesla",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },

  {
    name:"Bolo",
    photo:"http://www.vspcity.com/flash/social/1.jpg",
    scores:[
        5,
        4,
        3,
        4,
        1,
        5,
        1,
        4,
        2,
        4
      ]
    
  }

  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
