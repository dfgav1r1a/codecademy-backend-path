//get the script element
const source = document.getElementById('languagesTemp').innerHTML;
//bring the compiler object
const template = Handlebars.compile(source);
//object with variables for HB expressions and values
const context = {
 languages: [
    {
      name: 'HTML',
      modern: true
    },
    {
      name:'CSS',
      modern: true
    }, 
    {
      name: 'JavaScript',
      modern: true
    },
    {
      name: 'COBOL',
      modern: false
    }
  ]
};
//compile the contents of the script
const compiledHtml = template(context);
//get the element that has the HBexpresssions
const divElement= document.getElementById('goals');
//inject the expressions into the html
divElement.innerHTML = compiledHtml;