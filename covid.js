let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
let y;

fetch("https://api.covid19api.com/dayone/country/argentina/status/confirmed")
.then(response => response.json())
.then(data => {
  data=data.map(day => day.Cases);

let y = data.pop()

yAxis=(y-data[0])/1000;

data=data.map((point, i) => `L${i*4},${(y-point)/1000}`)

return data=[yAxis, data];

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
  document.querySelector(".svg").appendChild(svg);
})




