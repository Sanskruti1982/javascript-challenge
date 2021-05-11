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
  var inputElement1 = d3.select("#city")
  var inputElement2 = d3.select("#state")
  var inputElement3 = d3.select("#country")
  var inputElement4 = d3.select("#shape")

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");

  var filteredData=tableData;
    if (inputValue){
        filteredData = filteredData.filter(x => x.datetime === inputValue); 
    }
    if (inputValue1){
        filteredData = filteredData.filter(x => x.city === inputValue1);       
    }
    if (inputValue2){
        filteredData = filteredData.filter(x => x.state === inputValue2);       
    }
    if (inputValue3){
        filteredData = filteredData.filter(x => x.country === inputValue3);       
    }
    if (inputValue4){
        filteredData = filteredData.filter(x => x.shape === inputValue4);       
    }

  

  console.log(filteredData);

  var dt = filteredData.map(x => x.datetime);
  var city = filteredData.map(x => x.city);
  var state = filteredData.map(x => x.state);
  var country = filteredData.map(x => x.datetime);
  var shape = filteredData.map(x => x.shape);
  var duration = filteredData.map(x => x.durationMinutes);
  var comments = filteredData.map(x => x.comments);
  

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
  