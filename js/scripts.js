$(document).ready(function () {
  $("#formOne").submit(function () {
    const personInput = $("input#person").val();
    $(".person").append(personInput);
    event.preventDefault();
  });
});