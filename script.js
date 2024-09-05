function changeInputType() {
  var input = document.getElementById("input");
  var checkbox = document.getElementById("checkbox");

  if (checkbox.checked) {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
