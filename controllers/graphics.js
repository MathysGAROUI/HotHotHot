function refreshGraphics(){
  var chart = document.getElementById("line-chart");
  var gradient1 = chart.getContext("2d").createLinearGradient(0, 0, 0, 300);
  gradient1.addColorStop(0, 'rgba(252, 3, 223, 1)');
  gradient1.addColorStop(1, 'rgba(76, 0, 255, 0.1)');
  
  var gradient2 = chart.getContext("2d").createLinearGradient(0, 0, 0, 300);
  gradient2.addColorStop(0, 'rgba(76, 0, 255, 1)');
  gradient2.addColorStop(1, 'rgba(0, 255, 119, 0.1)');

    var dates = JSON.parse(localStorage.getItem('capteurs')).dates;
    var cpt1 = JSON.parse(localStorage.getItem('capteurs')).cpt1;
    var cpt2 = JSON.parse(localStorage.getItem('capteurs')).cpt2;

    new Chart(chart, {
        type: 'line',
        data: {
          labels: dates.slice(-20),
          datasets: [{ 
              data: cpt1.slice(-20),
              label: "Capteur interieur",
              borderColor: "#fc03df",
              fill: true,
              backgroundColor: gradient1
            }, { 
              data: cpt2.slice(-20),
              label: "Capteur exterieur",
              borderColor: "#4c00ff",
              fill: true,
              backgroundColor: gradient2
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Evolution des températures'
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,
                  suggestedMax: 30,
              }
          }]
  
          },
          animation: {
            duration: 0
          },
          tension: 1
        }
      });
      
}


HotSDK.refreshGraphics = refreshGraphics;