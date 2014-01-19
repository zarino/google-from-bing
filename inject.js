var q = document.getElementById('sb_form_q').value
var ul = document.getElementsByClassName('sw_a')[0]
if(typeof ul != 'undefined'){
  var li = document.createElement('li')
  var a = document.createElement('a')
  a.href = 'https://www.google.com/search?q=' + encodeURIComponent(q)
  a.innerHTML = 'Google'
  li.appendChild(a)
  ul.appendChild(li)
}
