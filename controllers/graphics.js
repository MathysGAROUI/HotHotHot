function refreshGraphics(previousLabel){

    var dates = JSON.parse(localStorage.getItem('capteurs')).dates;
    var cpt1 = JSON.parse(localStorage.getItem('capteurs')).cpt1;
    var cpt2 = JSON.parse(localStorage.getItem('capteurs')).cpt2;

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: dates.slice(-20),
          datasets: [{ 
              data: cpt1.slice(-20),
              label: "Capteur interieur",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: cpt2.slice(-20),
              label: "Capteur exterieur",
              borderColor: "#8e5ea2",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Evolution des températures'
          }
        }
      });
}



HotSDK.refreshGraphics = refreshGraphics;