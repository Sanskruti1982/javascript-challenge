// from data.js
var tableData = data;


// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
 //     // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });


var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  

  // Get the value property of the input element
  var inputValue = inputElement.property("value");


  console.log(inputValue);
  
  console.log(tableData);

  var filteredData = tableData.filter(x => x.datetime === inputValue );

  console.log(filteredData);

 
  

  // Then, select the unordered list element by class name
  var tbody = d3.select("tbody");
  var row = tbody.append("tr");

  // remove any children from the list to
  tbody.html("");

  // append stats to the list
  filteredData.forEach((x) => {
    console.log(x);
    var row = tbody.append("tr");
  Object.entries(x).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
   })
})
};
  