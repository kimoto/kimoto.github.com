window.addEventListener("load", function(){
  var part = document.getElementsByTagName("h1")[0];
  part.childNodes[0].textContent = "Net stalker Pro v2.1.2"

  var div = document.createElement('div');
  div.setAttribute("class", "ident");
  div.innerHTML = "My name is mala";
  part.appendChild(div);
});

