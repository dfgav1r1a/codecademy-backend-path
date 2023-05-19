//get the script element
const source = document.getElementById('ifHelper').innerHTML;
//bring the compiler object
const template = Handlebars.compile(source);
//object with variables for HB expressions and values
const context = {
  opinion: false 
};
//compile the contents of the script
const compiledHtml = template(context);
//get the element that has the HBexpresssions
const debateElement= document.getElementById('debate');
//inject the expressions into the html
debateElement.innerHTML = compiledHtml;