function addList() {
  let userValue = document.getElementById("inputVal").value;
  if (userValue == "") {
    alert("Please Enter a value ");
  } else {
    document.getElementById("lists").innerHTML = userValue;
  }
}
var newlist = document.getElementsByTagName("LI");
for (var i = 0; i < newlist.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("Remove");
  span.className = "closeTag";
  span.appendChild(text);
  newlist[i].appendChild(span);
}
