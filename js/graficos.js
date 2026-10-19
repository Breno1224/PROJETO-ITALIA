
const anosEconomia = [
    "2023", "2024", "2025"
];

const crescimentoEconomia = [
    0.9, 0.8, 0.5
];

new Chart(document.getElementById("graficoEconomia"), {
    type: "bar",
    data: {
        labels: anosEconomia,
        datasets: [{
            label: "Crescimento anual (%)",
            data: crescimentoEconomia,
            backgroundColor: "#208A87",
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Variação anual (%)"
                }
            }
        }
    }
});

const anosPIB = ["2021", "2022", "2023", "2024", "2025"];

const valoresPIB = [2.179, 2.104, 2.317, 2.383, 2.552];

new Chart(document.getElementById("graficoPIB"), {
    type: "line",
    data: {
        labels: anosPIB,
        datasets: [{
            label: "PIB (trilhões de US$)",
            data: valoresPIB,
            borderColor: "#8B5E3C",
            backgroundColor: "rgba(139, 94, 60, 0.15)",
            fill: true,
            tension: 0.3,
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Trilhões de dólares"
                }
            }
        }
    }
});
