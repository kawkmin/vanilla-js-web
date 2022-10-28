//const para1= document.getElementsByTagName('p')[0 ]; 
const paraGraphs = document.getElementsByTagName('p');
console.log(paraGraphs);
const para1 = paraGraphs[0];
console.log(para1.textContent);
console.log(para1.innerHTML);
para1.textContent = "Modified HTML file";
para1.innerHTML = "<i>Modified</i> HTML file";