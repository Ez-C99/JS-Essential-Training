/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Dot notation
console.log("The backpack object:", backpack);
console.log('The pocketNum value:', backpack.pocketNum);
console.log('Strap length L:', backpack.strapLength.left);

// Bracket notation - allows more advanced things
//    allows insert variable into console log
var query = 'pocketNum';
console.log('The pocketNum value:', backpack[query]);

//    allows properties with non-standard names since you're passing a quoted string (anything text)
