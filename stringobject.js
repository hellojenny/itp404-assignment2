// 1. string object

var string = {
  pluralize: function(item) {
    if (item.substring(item.length-1, item.length) == "y") {
      return item.substring(0,item.length-1)+"ies"
    }
    else {
      return item+"s";
    }
  }
};

console.log(string.pluralize('baby'));
console.log(string.pluralize('cat'));

// 2. Book and ShoppingCart constructor functions

function Book(input) {
  this.title = input.title;
  this.quantity = input.quantity;
  this.price = input.price;
}

Book.prototype.getSubtotal = function() {
   return this.quantity*this.price;
}

function ShoppingCart(items) {
  this.items = items;
}

ShoppingCart.prototype.add = function(item) {
  this.items.push(item);
}

ShoppingCart.prototype.getTotal = function() {
  var total = this.items.reduce(function(sum,item) {
     return sum + item.getSubtotal();
  }, 0);
  return total;
}

var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160

// 3.Implementing Array.prototype.map2()

Array.prototype.map2 = function(callback) {
  var newArray = [];
  for(var i=0;i<this.length;i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
}

var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]