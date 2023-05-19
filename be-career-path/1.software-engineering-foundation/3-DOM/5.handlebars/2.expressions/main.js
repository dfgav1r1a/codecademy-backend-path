//get the script element
const source = document.getElementById('greet').innerHTML;
//bring the compiler object
const template = Handlebars.compile(source);
//object with variables for HB expressions and values
const context = {
  greeting: 'Hello World!'
};
//compile the contents of the script
const compiledHtml = template(context);
//get the element that has the HBexpresssions
const fill = document.getElementById('hello');
//inject the expressions into the html
fill.innerHTML = compiledHtml;