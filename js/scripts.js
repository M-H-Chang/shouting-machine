$(document).ready(function () {
  const personInput = $("input#person").val();
  $("#formOne").submit(function () {
    $(".person").append("personInput")
  })
})