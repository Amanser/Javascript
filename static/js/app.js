// from data.js
var tableData = data;

// Shortcut to the table body
var tbody = d3.select("tbody");

// Shortcut to the Date filter button
var submit = d3.select("#filter-btn");

// Initialize the filteredData variable to match the full dataset
var filteredData = tableData;

// Variables set to the ID names of each textbox
var dateID = "datetime"
var cityID = "city"
var stateID = "state"
var countryID = "country"
var shapeID = "shape"

// Initially populates the HTML table with the full list of data
tableData.forEach((x) => {
  var row = tbody.append("tr");
  
  Object.entries(x).forEach(([key, value]) => {
    
    var cell = tbody.append("td");
    cell.text(value);
  });
});


// Function to reset text boxes
function clearTextbox(x) {

  document.getElementById(x).value = "";
}

// Function to filter the UFO data
function filterTableData(id) {

  var input = d3.select(`#${id}`).property("value");

  if (input !== "") {

    filteredData = filteredData.filter(x => x[id] === input)

  };

};


submit.on("click", function() {

    // Prevent the form from refreshing
    d3.event.preventDefault();

    // Resets the filteredData variable
    filteredData = tableData;

    // Clears any existing information in the table
    tbody.html("");
    
    // Runs the filter function on each textbox
    filterTableData(dateID);
    filterTableData(cityID);
    filterTableData(stateID);
    filterTableData(countryID);
    filterTableData(shapeID);

    
    // Prints the filtered array to the console
    console.log(filteredData);


    // For each loop to iterate through the filtered array and print it out onto the webpage table
    filteredData.forEach((x) => {
        var row = tbody.append("tr");
        
        Object.entries(x).forEach(([key, value]) => {
          
          var cell = tbody.append("td");
          cell.text(value);
        });
      });


});


// Reset button to reset the table only
var reset = d3.select("#reset-btn")


reset.on("click", function() {

  // Prevent the form from refreshing
  d3.event.preventDefault();

  // Clears any existing data in the table
  tbody.html("");

  // Repopulates the table with the full UFO data list
  tableData.forEach((x) => {
    var row = tbody.append("tr");
    
    Object.entries(x).forEach(([key, value]) => {
      
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  

});

// clear button to reset all of the text filters
var clear = d3.select("#clear-btn")

clear.on("click", function () {

  d3.event.preventDefault();

  // Call the function to clear each text box
  clearTextbox(dateID);
  clearTextbox(cityID);
  clearTextbox(stateID);
  clearTextbox(countryID);
  clearTextbox(shapeID);

});




