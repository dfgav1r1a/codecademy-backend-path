const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
       if (this._meal && this._price) {
        return `Today's Special is Spagetti for $5!`;
       } else {
        return `Meal and price was not set correctly!`;
       } 
    },
};

// this section assing a different value to the properties but instead, creates new properties into the object. If I use _meal it will change the value.
// menu.meal = 0;
// menu.price = "";

// console.log(menu);

//checking setters
menu.meal = 'ajiaco';
menu.price = 15.00;
// console.log(menu);

//testing the getter
console.log(menu.todaysSpecial);