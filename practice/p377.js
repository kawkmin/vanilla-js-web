const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "I was created dynamically!";
p2.innerHTML = "I was <i>also</i> created dynamically!";
const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
parent.insertBefore(p1, firstChild);
parent.appendChild(p2);
