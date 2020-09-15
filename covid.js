let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
let y;

fetch("https://api.covid19api.com/dayone/country/argentina/status/confirmed")
.then(response => response.json())
.then(data => {
  data=data.map(day => day.Cases);

let y = data.pop()
data.push(y);

let points=[];
console.log(y)
for (let i = 0; i < data.length-1; i++) {
  const element = data[i];
  points.push(`L${i*4},${(y-element)/1000}`)
}

return data=[(y-data[0])/1000, points];

}).then( data => {
svg.setAttribute("href", "http://www.w3.org/1999/xlink");
svg.setAttribute("width", 850);
svg.setAttribute("height", 750);
svg.innerHTML=  `<path d="M0,${data[0]} ${data[1]}
  
" 
  style="stroke: #FF0000;
  stroke-width: 6;
  fill: none;
  "
/>`
return svg;


}).then(svg => {
  // console.log(svg)
  document.querySelector(".svg").appendChild(svg);
})




