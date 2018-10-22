$(document).ready(function() {

  var flavors =["flavorite"];

  $("form#form1").submit(function(event) {

    flavors.push($("input#flavorite").val());

    flavors.forEach(function(flavor) {
      var userInput = $("input#" + flavor).val();
      $("." + flavor).append("<li>" + userInput + "</li>");
    });

    $("#hidden").show();

    event.preventDefault();
  });
});
