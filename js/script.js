$(document).ready(function() {
  $("#pizza").submit(function(event) {
    var nameInput = $("#name").val();
    var tellyInput = $("#telly").val();
    var sizeInput = $("#size").val();
    var crustInput = $("#crust").val();
    var toppingInput = $("#topping").val();
    var addressInput = $("#address").val();
    var sauceInput = $("#sauce").val();
    var colorInput = $("#color").val();

    $(".color").css("background-color", colorInput);
    $(".name").text(nameInput);
    $(".telly").text(tellyInput);
    $(".size").text(sizeInput);
    $(".crust").text(crustInput);
    $(".topping").text(toppingInput);
    $(".address").text(addressInput);
    $(".sauce").text(sauceInput);

    $("#pizza").fadeOut("slow").hide();
    $("#receipt").fadeIn("slow").show();
    event.preventDefault();
  });
});
