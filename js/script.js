$(document).ready(function() {
  $("#pizza").submit(function(event) {
    var nameInput = $("#name").val();
    var tellyInput = $("#telly").val();
    var sizeInput = $("#size").val();
    var crustInput = $("#crust").val();
    var toppingInput = $("#topping").val();
    var addressInput = $("#address").val();
    var sauceInput = $("#sauce").val();


    event.preventDefault();
  });
});
