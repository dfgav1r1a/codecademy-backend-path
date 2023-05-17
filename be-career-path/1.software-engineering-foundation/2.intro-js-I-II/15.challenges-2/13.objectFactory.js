// 1.
// Write a function, dogFactory(). It should:

// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
// dogFactory('Joe', 'Pug', 27)
// // Should return { name: 'Joe', breed: 'Pug', weight: 27 }
// Checkpoint 2 Passed

// Stuck? Get a hint
// 2.
// Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// Checkpoint 3 Passed

// Stuck? Get a hint
// 3.
// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

// Write your code here:
const dogFactory = (name, breed, weight) => {
    const object = {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        get breed() {
            return this._breed;
        },
        get weight() {
            return this._weight;
        },
        set name(name) {
            return this._name = name;
        },
        set breed(breed) {
            return this._breed = breed;
        },
        set weight(weight) {
            return this._weight = weight;
        },
        bark: () => {
            return 'ruff! ruff!'
        },
        eatTooManyTreats: function () {
            return this._weight = this._weight + 1;
        }
    }
    return object;
}