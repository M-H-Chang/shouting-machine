$(document).ready(function () {
  $("#formOne").submit(function () {
    const personInput = $("input#person").val();
    const allCaps = personInput.toUpperCase();
    $(".person").text(allCaps);
    event.preventDefault();
  });
});