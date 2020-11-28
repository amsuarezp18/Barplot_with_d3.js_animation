import React, { useState, useEffect } from "react";
import "./Grafica.css";
import * as d3 from "d3";

export default function Grafica() {
  const data = [
    { name: "Medellín", index2005: 3, index2006: 33 },
    { name: "Cali", index2005: 39, index2006: 45 },
    { name: "Bogotá", index2005: 7, index2006: 31 },
    { name: "Pereira", index2005: 35, index2006: 36 },
    { name: "Bucaramanga", index2005: 16, index2006: 23 },
    { name: "Cúcuta", index2005: 45, index2006: 45 },
    { name: "Armenia", index2005: 6, index2006: 16 },
  ];

  useEffect(() => {
   
    const svg = d3.select("#canvas").append("svg")
    .attr("width", 600)
    .attr("height", 500)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle = svg.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

d3.select("#start").on("click", function () {
    rectangle
        .transition()
        .attr("x", 250)
        .attr("width", 100) 
      .attr("height", 100) 
      .on("end",function() { 
		    d3.select(this)
		    	.transition() 
                .attr("fill", "blue") 
                 
		});
    
});

d3.select("#reset").on("click", function () {
    rectangle
        .transition()
        .attr("x", 50)
        .on("end",function() { 
          d3.select(this)
            .transition() 
                  .attr("fill", "#000") 
                   
      });
        
});

    
  }, []);

  return (
    <div class="container">
      <h1>Reto 1</h1>
      <div>
     <button className="btn-grap" id="reset"> Gráfica del 2005</button>
     <button className="btn-grap" id="start">Gráfica del 2006 </button>
     </div>
      <div id="canvas"></div>
    </div>
  );
}
