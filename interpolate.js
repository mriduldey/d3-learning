const dataArray = [
  { x: 5, y: 5 },
  { x: 10, y: 15 },
  { x: 20, y: 15 },
  { x: 30, y: 18 },
  { x: 40, y: 50 },
  { x: 50, y: 50 },
];
const svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

const line = d3
  .line()
  .x((d, i) => d.x * 5)
  .y((d, i) => d.y * 5)
  .curve(d3.curveCardinal);

svg
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("d", line(dataArray));
