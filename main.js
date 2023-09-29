function addList() {
  let userValue = document.getElementById("inputVal").value;
  if (userValue == "") {
    alert("Please Enter a value ");
  } else {
    document.getElementById("lists").innerHTML = userValue;
  }
}
