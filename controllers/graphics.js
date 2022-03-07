function refreshGraphics(previousLabel){
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: JSON.parse(localStorage.getItem('capteurs')).dates,
          datasets: [{ 
              data: JSON.parse(localStorage.getItem('capteurs')).cpt1,
              label: "Capteur interieur",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: JSON.parse(localStorage.getItem('capteurs')).cpt2,
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