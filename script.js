let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/alex-af/krsk-med-site/master/promed_custom.css');
xhr.send();
xhr.onload = function() {
  if (xhr.status == 200) { 
var style = document.createElement("style");
style.innerHTML=xhr.response;
document.getElementsByTagName("head")[0].appendChild(style);
  }
};
