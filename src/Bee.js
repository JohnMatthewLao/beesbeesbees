// var Bee = function() {
//   Grub.call(this);
// };
// Bee.prototype = Object.create(Grub.prototype);
// Bee.prototype.contructor = Bee;
// Bee.prototype.color = 'yellow';
// Bee.prototype.age = 5;
// Bee.prototype.job = 'keep on growing';

// var bee = new Bee();
// console.log(bee)


var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};


Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;