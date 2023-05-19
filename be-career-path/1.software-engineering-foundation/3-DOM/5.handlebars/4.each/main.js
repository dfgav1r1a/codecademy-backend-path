//get the script element
const source = document.getElementById('eachHelper').innerHTML;
//bring the compiler object
const template = Handlebars.compile(source);
//object with variables for HB expressions and values
const context = {
  newArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
};
//compile the contents of the script
const compiledHtml = template(context);
//get the element that has the HBexpresssions
const divElement= document.getElementById('display');
//inject the expressions into the html
divElement.innerHTML = compiledHtml;