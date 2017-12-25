import { bb, d3 } from 'billboard.js/dist/billboard';

export default function(dataURL, portletNamespace) {
    
    console.log('dataURL = ' + dataURL);
    console.log('portletNamespace = ' + portletNamespace);
     
//    var svg = d3.select("svg"),
//    margin = {top: 20, right: 20, bottom: 30, left: 40},
//    width = +svg.attr("width") - margin.left - margin.right,
//    height = +svg.attr("height") - margin.top - margin.bottom;
// 
//    var x = d3.scaleTime().range([0, width]);
//    var y = d3.scaleLinear().rangeRound([height, 0]);
//     
//     var g = svg.append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//         
//     var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S");
//     
//     var formatTime = d3.timeFormat("%H:%M");
//     
//     d3.json(dataURL, function(error, data) {
//         
//         if (error) throw error;
//                 
//         var unit = ""; 
//         if (data && data.length > 0) {
//             unit = data[0].unit; 
//         }
//             
//         // retrieve the date
//         
//         data.forEach(function(d) {
//             d.timestamp = parseTime(d.timestamp);
//         });
//         
//         var minDate = d3.min(data, function(d) {return d.timestamp}); 
//         var maxDate = d3.max(data, function(d) {return d.timestamp});
//         
//         console.log(minDate); 
//         console.log(maxDate); 
//         
//         var minValue = d3.min(data, function(d) {return d.value});
//         if (minValue > 0) {
//             minValue = 0;
//         }
//         var maxValue = d3.max(data, function(d) {return d.value});
//
//         console.log(minValue); 
//         console.log(maxValue);
//             
//         x.domain([minDate, maxDate]);
//         y.domain([minValue, maxValue]);
//         
//         g.append("g")
//             .attr("class", "axis axis--x")
//             .attr("transform", "translate(0," + height + ")")
//             .call(d3.axisBottom(x))
//         ;
//     
//         g.append("g")
//             .attr("class", "axis axis--y")
//             .call(d3.axisLeft(y).ticks(10, ""))
//         ;
//     
//         g.selectAll(".bar")
//             .data(data)
//                 .enter().append("rect")
//                 .attr("class", "bar")
//                 .attr("x", function(d) { return x(d.timestamp); })
//                 .attr("y", function(d) { return y(d.value); })
//                 .attr("width", (width / data.length))
//                 .attr("height", function(d) { return height - y(d.value); })
//         ;
//     });

}