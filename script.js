Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

fetch('https://coasters-api.herokuapp.com/country/Spain')
    .then(response => response.json())
    .then(data => printCharts(data))


function printCharts(coasters) {

    console.log('Estas son las montañas rusas', coasters)

    // Vamos a darle fuegote aquí!
}