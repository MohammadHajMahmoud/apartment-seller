$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (data) {
    $("#results").empty()
    const source = $('#apartments-template').html();
    const template = Handlebars.compile(source)
    let someHTML = template({apartments : data})
    $("#results").append(someHTML)
}

renderApts(apartments) //renders apartments when page loads