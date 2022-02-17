Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'



fetch('https://coasters-api.herokuapp.com/country/Spain')
    .then(response => response.json())
    .then(data => printCharts(data))


function printCharts(coasters) {

    console.log('Estas son las montañas rusas', coasters)

    let [superman, batman, vertigo, abismo, shambala, tarantula] = coasters

    speedChart(superman, batman, vertigo, abismo, shambala, tarantula)

    lengthChart(superman, batman, vertigo, abismo, shambala, tarantula)

    heightChart(superman, batman, vertigo, abismo, shambala, tarantula)

    lengthSpeedChart(superman, batman, vertigo, abismo, shambala, tarantula)
}




function speedChart(superman, batman, vertigo, abismo, shambala, tarantula) {

    let data = {
        labels: ['Superman', 'Batman', 'Vertigo', 'Abismo', 'Shambala', 'Tarántula'],
        datasets: [{
            data: [superman.speed, batman.speed, vertigo.speed, abismo.speed, shambala.speed, tarantula.speed],
            label: 'Km/h',
            borderWidth: 1,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.2)', 'rgba(33, 192, 215, 0.2)', 'rgba(217, 158, 43, 0.2)', 'rgba(205, 58, 129, 0.2)', 'rgba(156, 153, 204, 0.2)', 'rgba(225, 78, 202, 0.2)']
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart1', { type: 'bar', data, options })
}





function lengthChart(superman, batman, vertigo, abismo, shambala, tarantula) {

    let data = {
        labels: ['Superman', 'Batman', 'Vertigo', 'Abismo', 'Shambala', 'Tarántula'],
        datasets: [{
            data: [superman.length, batman.length, vertigo.length, abismo.length, shambala.length, tarantula.length],
            label: 'mts',
            borderWidth: 1,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.2)', 'rgba(33, 192, 215, 0.2)', 'rgba(217, 158, 43, 0.2)', 'rgba(205, 58, 129, 0.2)', 'rgba(156, 153, 204, 0.2)', 'rgba(225, 78, 202, 0.2)']
        }]
    }

    const options = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart2', { type: 'doughnut', data, options })
}




function heightChart(superman, batman, vertigo, abismo, shambala, tarantula) {

    let data = {
        labels: ['Superman', 'Batman', 'Vertigo', 'Abismo', 'Shambala', 'Tarántula'],
        datasets: [{
            data: [superman.height, batman.height, vertigo.height, abismo.height, shambala.height, tarantula.height],
            label: 'mts',
            borderWidth: 1,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.2)', 'rgba(33, 192, 215, 0.2)', 'rgba(217, 158, 43, 0.2)', 'rgba(205, 58, 129, 0.2)', 'rgba(156, 153, 204, 0.2)', 'rgba(225, 78, 202, 0.2)']
        }]
    }


    let options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                ticks: { display: false }
            }
        }
    }

    new Chart('chart3', { type: 'radar', data, options })
}


function lengthSpeedChart(superman, batman, vertigo, abismo, shambala, tarantula) {

    let data = {
        labels: ['Superman', 'Batman', 'Vertigo', 'Abismo', 'Shambala', 'Tarántula'],
        datasets: [
            {
                data: [superman.height, batman.height, vertigo.height, abismo.height, shambala.height, tarantula.height],
                type: 'line',
                label: 'mts',
                borderWidth: 3,
                borderColor: 'rgba(116, 72, 194, 1)',
                backgroundColor: 'rgba(116, 72, 194, 1)'
            },
            {
                data: [superman.speed, batman.speed, vertigo.speed, abismo.speed, shambala.speed, tarantula.speed],
                label: 'kn/h',
                borderWidth: 1,
                borderColor: 'rgba(33, 192, 215, 1)',
                backgroundColor: 'rgba(33, 192, 215, 0.2)'
            }
        ]
    }


    let options = {
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false
    }


    new Chart('chart4', { type: 'bar', data, options })
}