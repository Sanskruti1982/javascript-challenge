// from data.js
var tableData = data;

// Selecting the table body id
var tbody = d3.select("tbody");

// Adding rows into table and then add each key and value
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
       var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
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

  // Creating if statement for the filters to work
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

  
  // Printing the filtered data
  console.log(filteredData);

  // Then, select the table and append the table rows
  var tbody = d3.select("tbody");
  var row = tbody.append("tr");

  // Remove any data from the table
  tbody.html("");

  // Create a loop to get the value for each key
  filteredData.forEach((x) => {
    console.log(x);
    var row = tbody.append("tr");
  Object.entries(x).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
   })
})
};
  