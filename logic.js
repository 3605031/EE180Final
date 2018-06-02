
var x_1 = []
var y_c = []

for(var i=200;i<1200;i++){

    x_1.push(i)    

}




  
var layout = {
    xaxis: {
      title: 'Maximum System Voltage (kV)',
      titlefont: {
        family: 'Courier New, monospace',
        size: 13,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: 'Tower Strike Distance(m)',
      titlefont: {
        family: 'Courier New, monospace',
        size: 13,
        color: '#7f7f7f'
      }
    }
};

  


  $("#button").click(function(event) {
    event.preventDefault();

    //Contamination Graph
    let contLv = $("#contLv").val()
    let c = 0
    switch(contLv) {
        case 'Very Light':
            c = 20;
            console.log("v lite")
            break
        case 'Light':
            c = 24;
            console.log("lite")
            break
        case 'Moderate':
            c = 28;
            console.log("med")
            break
        case 'Heavy':
            c = 32;
            console.log("heavy")
            break    
    }
    for(var i=0;i<1000;i++){

        let y = ((x_1[i] / Math.sqrt(3)) * c * (146/305) * (1/1.25))
        y_c[i] = y;
    }
    traceC = {
        type: 'scatter',
        x: x_1,
        y: y_c,
        mode: 'lines',
        name: 'Red',
        line: {
          color: 'rgb(219, 64, 82)',
          width: 2
        }
    };
    console.log(c)
    Plotly.newPlot('myDiv', [traceC], layout);
    
})