let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
let y;

fetch("https://api.covid19api.com/dayone/country/argentina/status/confirmed")
.then(response => response.json())
.then(data => {
  data=data.map(day => day.Cases);

// por ahora trabajemos con un eje x de 1 px

let y = data.pop()
data.push(y);

let points=[];
console.log(y)
for (let i = 0; i < data.length-1; i++) {
  const element = data[i];
  points.push(`L${i*3},${(y-element)/1000}`)
}

return data=[(y-data[0])/1000, points];

}).then( data => {
svg.setAttribute("href", "http://www.w3.org/1999/xlink");
svg.setAttribute("width", 500);
svg.setAttribute("height", 700);
svg.innerHTML=  `<path d="M0,${data[0]} ${data[1]}
  
" 
  style="stroke: #FF0000;
  stroke-width: 3;
  fill: none;
  "
/>`
return svg;


}).then(svg => {
  // console.log(svg)
  document.querySelector(".svg").appendChild(svg);
})




