const dataArr = [5, 11, 18];

const svg = d3
  .select("body")
  .append("svg")
  .attr("height", "500")
  .attr("width", "100%");

svg
  .selectAll("rect")
  .data(dataArr)
  .enter()
  .append("rect")
  .attr("height", (d) => d * 15)
  .attr("width", "50")
  .attr("x", (d, i) => 60 * i)
  .attr("y", (d, i) => 300 - d * 15)
  .attr("fill", "orange");

let newX = 300;

svg
  .selectAll("circle.first")
  .data(dataArr)
  .enter()
  .append("circle")
  .attr("class", "first")
  .attr("cx", (d, i) => {
    newX += d * 4 + i * 10;
    return newX;
  })
  .attr("cy", "100")
  .attr("r", (d) => d * 2);

newX = 600;

svg
  .selectAll("ellipse")
  .data(dataArr)
  .enter()
  .append("ellipse")
  .attr("class", "second")
  .attr("cx", (d, i) => {
    newX += d * 4 + i * 10;
    return newX;
  })
  .attr("cy", "100")
  .attr("rx", (d) => d * 3)
  .attr("ry", "30")
  .attr("fill", "red");

newX = 900;
svg
  .selectAll("line")
  .data(dataArr)
  .enter()
  .append("line")
  .attr("x1", newX)
  .attr("y1", (d, i) => 80 + i * 30 + 30)
  .attr("x2", (d) => newX + d * 15)
  .attr("y2", (d, i) => 80 + i * 20)
  .attr("stroke", "blue")
  .attr("stroke-width", "2");

svg
  .append("text")
  .text("First SVG text")
  .attr("x", newX)
  .attr("y", 250)
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("font-size", "30");
