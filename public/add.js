$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newTable = {
      name: $("#name").val().trim(),
      role: $("#phone").val().trim(),
      age: $("#email").val().trim(),
      forcePoints: $("#unique-id").val().trim()
    };

    // JQuery
    $.post("/api/tables", newTable)
      .then(function(data) {
        console.log("reserve.html", data);
        alert("Adding a Table Reservation");
      });
  });