$(document).ready(function () {
  $("#formOne").submit(function () {
    const personInput = $("input#person").val();
    $(".person").text(personInput);
    event.preventDefault();
  });
});