/// <reference path="OrgChartJS/orgchart.d.ts" />
var chart = new OrgChart(document.getElementById("familytree"), {
    mouseScrool: OrgChart.action.yScroll,
    orientation: OrgChart.orientation.bottom,
    template: "base",
    enableSearch: false,
    template: "rony",
    // nodes: [
    //     { id: "1" },
    //     { id: "2", pid: "1" },
    //     { id: "3", pid: "1" }
    // ]
    // mouseScrool: OrgChart.action.none,
    // layout: OrgChart.orientation.bottom,
    // template: "rony",
    nodeBinding: {
        img_0: "photo",
        field_0: "name",
        field_1: "period"
    },
    nodes: [{
        id: 1,
        photo: "resources/assignments/reading1-logo-386.jpg",
        name: "Poddar Monica",
        period: "1994 - Present"
    }, {
        id: 2,
        pid: 1,
        name: "Poddar Kamal",
        period: "1957 - Present",
        photo: "resources/assignments/reading1-logo-386.jpg"
    }, {
        id: 3,
        pid: 1,
        name: "Poddar Anjana",
        period: "1963 - Present",
        photo: "resources/assignments/reading1-logo-386.jpg"
    }, {
        id: 4,
        pid: 2,
        name: "Poddar Dinesh",
        period: "1923 - 2013",
        photo: "resources/assignments/reading1-logo-386.jpg"
    }, {
        id: 5,
        pid: 2,
        name: "Poddar Dulali",
        period: "1923 - 2013",
        photo: "resources/assignments/reading1-logo-386.jpg"
    }, {
        id: 6,
        pid: 3,
        name: "Das Ranjan",
        period: "1923 - 2013",
        photo: "resources/assignments/reading1-logo-386.jpg"
    }, {
        id: 7,
        pid: 3,
        name: "Das Swapna",
        period: "1923 - Present",
        photo: "resources/assignments/reading1-logo-386.jpg"
    }]
});