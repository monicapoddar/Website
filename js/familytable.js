//define some sample data
var tabledata = [
    { id: 1, lname: "Das", fname: "Swapna", gen: 2, rel: "Grandmother (M)", yob: "1940", yod: "-", loc: "Kolkata, India" },
    { id: 2, lname: "Das", fname: "Ranjan", gen: 2, rel: "Grandfather (M)", yob: "1938", yod: "2020", loc: "Purnia, India" },
    { id: 3, lname: "Das", fname: "Amarendranath", gen: 1, rel: "Great grandfather (M;P)", yob: "1915", yod: "1975", loc: "Sylhet, Bangladesh" },
    { id: 4, lname: "Das", fname: "Kamalokshi", gen: 1, rel: "Great grandmother (M;P)", yob: "1920", yod: "1980", loc: "Sylhet, Bangladesh" },
    { id: 5, lname: "Devi", fname: "Kamla", gen: 1, rel: "Great grandmother (P;M)", yob: "1917", yod: "1943", loc: "Baroda, India" },
    { id: 6, lname: "Narayan", fname: "Nitindra", gen: 1, rel: "Great grandfather (P;M)", yob: "1912", yod: "1969", loc: "Coch Behar, India" },
    { id: 7, lname: "Poddar", fname: "Monica", gen: 4, rel: "Myself", yob: "1994", yod: "-", loc: "Patna, India" },
    { id: 8, lname: "Poddar", fname: "Anjana", gen: 3, rel: "Mother", yob: "1963", yod: "-", loc: "Bhagalpur, India" },
    { id: 9, lname: "Poddar", fname: "Kamal", gen: 3, rel: "Father", yob: "1957", yod: "-", loc: "Coch Behar, India" },
    { id: 10, lname: "Poddar", fname: "Dinesh", gen: 2, rel: "Grandfather (P)", yob: "1933", yod: "2013", loc: "Coch Behar, India" },
    { id: 11, lname: "Poddar", fname: "Dulali", gen: 2, rel: "Grandmother (P)", yob: "1937", yod: "1965", loc: "Coch Behar, India" },
    { id: 12, lname: "Poddar", fname: "Indrani", gen: 2, rel: "Grandmother (P)", yob: "1945", yod: "-", loc: "Coch Behar, India" },
    { id: 13, lname: "Poddar", fname: "Deepak", gen: 1, rel: "Great grandfather (P;P)", yob: "1903", yod: "1949", loc: "Sojat, India" },
    { id: 14, lname: "Poddar", fname: "Shyamoli", gen: 1, rel: "Great grandmother (P;P)", yob: "1906", yod: "1946", loc: "Satkhira, Bangladesh" },
    { id: 15, lname: "Roy", fname: "Monica", gen: 1, rel: "Great grandmother (P;P)", yob: "1918", yod: "1989", loc: "Dhaka, Bangladesh" },
    { id: 16, lname: "Roy", fname: "Bhupendranath", gen: 1, rel: "Great grandfather (M;M)", yob: "1908", yod: "1986", loc: "Dhaka, Bangladesh" }
];

//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
    height: 550, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    //width: 1140,
    data: tabledata, //assign data to table
    layout: "fitColumns", //fit columns to width of table (optional)
    columns: [ //Define Table Columns
        // { title: "LAST NAME", field: "lname", sorter: "string", align: "left", width: 152 },
        // { title: "FIRST NAME", field: "fname", sorter: "string", align: "left", width: 152 },
        // { title: "GENERATION", field: "gen", sorter: "number", align: "left", width: 152 },
        // { title: "RELATION", field: "rel", sorter: "string", align: "left", width: 218 },
        // { title: "YEAR OF BIRTH", field: "yob", sorter: "number", align: "left", width: 152 },
        // { title: "YEAR OF DEATH", field: "yod", sorter: "number", align: "left", width: 152 },
        // { title: "LOCATION", field: "loc", sorer: "string", align: "left", width: 162 }
        { title: "LAST NAME", field: "lname", sorter: "string", align: "left" },
        { title: "FIRST NAME", field: "fname", sorter: "string", align: "left" },
        { title: "GENERATION", field: "gen", sorter: "number", align: "left" },
        { title: "RELATION", field: "rel", sorter: "string", align: "left" },
        { title: "YEAR OF BIRTH", field: "yob", sorter: "number", align: "left" },
        { title: "YEAR OF DEATH", field: "yod", sorter: "number", align: "left" },
        { title: "LOCATION", field: "loc", sorter: "string", align: "left" }
    ],
    rowClick: function(e, row) { //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
    // tableBuilt: function() {
    //     var i;
    //     const cells = document.getElementsByClassName("tabulator-cell");
    //     console.log(cells);
    //     console.log(cells.length);
    //     console.log(typeof cells);
    //     console.log(Object.keys(cells));
    //     //cells[6].style.borderRightWidth = 0;
    //     for (i = 0; i < cells.length; i++) {
    //         console.log(cells[i]);
    //         if (cells[i].getAttribute("tabulator-field") == "loc") {
    //             cells[i].style.borderRightWidth = 0;
    //         }
    //     }
    // },
});


//Custom filter example
function customFilter(data) {
    return data.lname;
}

//Trigger setFilter function with correct parameters
function updateFilter() {

    var filter = $("#filter-field").val() == "function" ? customFilter : $("#filter-field").val();
    console.log(filter);

    if ($("#filter-field").val() == "function") {
        $("#filter-type").prop("disabled", true);
        $("#filter-value").prop("disabled", true);
    } else {
        $("#filter-type").prop("disabled", false);
        $("#filter-value").prop("disabled", false);
    }

    table.setFilter(filter, $("#filter-type").val(), $("#filter-value").val());
}

//Update filters on value change
$("#filter-field, #filter-type").change(updateFilter);
$("#filter-value").keyup(updateFilter);

//Clear filters on "Clear Filters" button click
$("#filter-clear").click(function() {
    $("#filter-field").val("");
    $("#filter-type").val("=");
    $("#filter-value").val("");

    table.clearFilter();
});



function updateTimelineFilter() {

    var filter = $("#timeline-filter-field").val() == "function" ? "" : $("#timeline-filter-field").val();
    console.log(filter);
    if (filter == "alive") {
        document.getElementById("poddar-deepak-time").style.display = "none";
        document.getElementById("poddar-shyamoli-time").style.display = "none";
        document.getElementById("narayan-nitindra-time").style.display = "none";
        document.getElementById("devi-kamla-time").style.display = "none";
        document.getElementById("das-amarendranath-time").style.display = "none";
        document.getElementById("das-kamalokshi-time").style.display = "none";
        document.getElementById("roy-bhupendranath-time").style.display = "none";
        document.getElementById("roy-monica-time").style.display = "none";
        document.getElementById("poddar-dinesh-time").style.display = "none";
        document.getElementById("poddar-dulali-time").style.display = "none";
        document.getElementById("das-ranjan-time").style.display = "none";

        document.getElementById("poddar-indrani-time").style.display = "initial";
        document.getElementById("das-swapna-time").style.display = "initial";
        document.getElementById("poddar-kamal-time").style.display = "initial";
        document.getElementById("poddar-anjana-time").style.display = "initial";
        document.getElementById("poddar-monica-time").style.display = "initial";

        var arrows = document.getElementsByClassName("alive-arrow");
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].style.display = "initial";
        }
    } else if (filter == "dead") {
        document.getElementById("poddar-deepak-time").style.display = "initialinitial";
        document.getElementById("poddar-shyamoli-time").style.display = "initial";
        document.getElementById("narayan-nitindra-time").style.display = "initial";
        document.getElementById("devi-kamla-time").style.display = "initial";
        document.getElementById("das-amarendranath-time").style.display = "initial";
        document.getElementById("das-kamalokshi-time").style.display = "initial";
        document.getElementById("roy-bhupendranath-time").style.display = "initial";
        document.getElementById("roy-monica-time").style.display = "initial";
        document.getElementById("poddar-dinesh-time").style.display = "initial";
        document.getElementById("poddar-dulali-time").style.display = "initial";
        document.getElementById("das-ranjan-time").style.display = "initial";

        document.getElementById("poddar-indrani-time").style.display = "none";
        document.getElementById("das-swapna-time").style.display = "none";
        document.getElementById("poddar-kamal-time").style.display = "none";
        document.getElementById("poddar-anjana-time").style.display = "none";
        document.getElementById("poddar-monica-time").style.display = "none";

        var arrows = document.getElementsByClassName("alive-arrow");
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].style.display = "none";
        }
    } else {
        document.getElementById("poddar-deepak-time").style.display = "initialinitial";
        document.getElementById("poddar-shyamoli-time").style.display = "initial";
        document.getElementById("narayan-nitindra-time").style.display = "initial";
        document.getElementById("devi-kamla-time").style.display = "initial";
        document.getElementById("das-amarendranath-time").style.display = "initial";
        document.getElementById("das-kamalokshi-time").style.display = "initial";
        document.getElementById("roy-bhupendranath-time").style.display = "initial";
        document.getElementById("roy-monica-time").style.display = "initial";
        document.getElementById("poddar-dinesh-time").style.display = "initial";
        document.getElementById("poddar-dulali-time").style.display = "initial";
        document.getElementById("das-ranjan-time").style.display = "initial";

        document.getElementById("poddar-indrani-time").style.display = "initial";
        document.getElementById("das-swapna-time").style.display = "initial";
        document.getElementById("poddar-kamal-time").style.display = "initial";
        document.getElementById("poddar-anjana-time").style.display = "initial";
        document.getElementById("poddar-monica-time").style.display = "initial";

        var arrows = document.getElementsByClassName("alive-arrow");
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].style.display = "initial";
        }
    }
}

$("#timeline-filter-field").change(updateTimelineFilter);

$("#timeline-filter-clear").click(function() {
    $("#timeline-filter-field").val("");
    updateTimelineFilter();
});