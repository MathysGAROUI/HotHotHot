let lastLabel = '';
let cpt1 = [];
let cpt2 = [];
let dates = [];

function refreshGraphics(){
    let allDates = JSON.parse(localStorage.getItem('capteurs')).dates;

    if(allDates.length === 0 || allDates[allDates.length - 1] === lastLabel){
      return;
    }
    dates.push(allDates[allDates.length - 1]);
    let allCpt1 = JSON.parse(localStorage.getItem('capteurs')).cpt1;
    let allCpt2 = JSON.parse(localStorage.getItem('capteurs')).cpt2;
    cpt1.push(allCpt1[allCpt1.length - 1])
    cpt2.push(allCpt2[allCpt2.length - 1])

    const chart = document.getElementById("line-chart");
    const gradient1 = chart.getContext("2d").createLinearGradient(0, 0, 0, 300);
    gradient1.addColorStop(0, 'rgba(252, 3, 223, 1)');
    gradient1.addColorStop(1, 'rgba(76, 0, 255, 0.1)');

    const gradient2 = chart.getContext("2d").createLinearGradient(0, 0, 0, 300);
    gradient2.addColorStop(0, 'rgba(76, 0, 255, 1)');
    gradient2.addColorStop(1, 'rgba(0, 255, 119, 0.1)');

    const chartData = new Chart(chart, {
        type: 'line',
        data: {
            labels: dates.slice(-20),
            datasets: [{
                data: cpt1.slice(-20),
                label: "Capteur interieur",
                borderColor: "#e500ff",
                fill: true,
                backgroundColor: gradient1
            }, {
                data: cpt2.slice(-20),
                label: "Capteur exterieur",
                borderColor: "#001dd0",
                fill: true,
                backgroundColor: gradient2
            }
            ]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            },
            tooltips: {enabled: false},
            events: [],
            title: {
                display: true,
                text: 'Evolution des températures',
                fontColor: "white",
                fontSize: 18
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 25,
                        fontColor: "white",
                        fontSize: 18
                    }
                }],
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: "white",
                        fontSize: 18
                    }
                }]

            },
            animation: {
                duration: 0
            },
            tension: 1
        }
    });

    lastLabel = chartData.chart.config.data.labels[chartData.chart.config.data.labels.length - 1];
}

HotSDK.refreshGraphics = refreshGraphics;