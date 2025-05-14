fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const commonOptions = {
        responsive: true,
        scales: {
          r: {
            angleLines: { display: true },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              stepSize: 20,
              backdropColor: 'transparent'
            },
            pointLabels: {
              font: {
                size: 14
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top'
          }
        }
      };

      // Alumni Characteristics Radar Chart
      new Chart(document.getElementById('alumniRadarChart'), {
        type: 'radar',
        data: {
          labels: data.alumniChart.labels,
          datasets: [{
            label: 'Alumnus Profile Score',
            data: data.alumniChart.data,
            fill: true,
            backgroundColor: 'rgba(13, 110, 253, 0.2)',
            borderColor: 'rgba(13, 110, 253, 1)',
            pointBackgroundColor: 'rgba(13, 110, 253, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(13, 110, 253, 1)'
          }]
        },
        options: commonOptions
      });

      // Program & Curriculum Radar Chart
      new Chart(document.getElementById('programRadarChart'), {
        type: 'radar',
        data: {
          labels: data.programChart.labels,
          datasets: [{
            label: 'Program Contribution Score',
            data: data.programChart.data,
            fill: true,
            backgroundColor: 'rgba(25, 135, 84, 0.2)',
            borderColor: 'rgba(25, 135, 84, 1)',
            pointBackgroundColor: 'rgba(25, 135, 84, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(25, 135, 84, 1)'
          }]
        },
        options: commonOptions
      });
    })
    .catch(error => console.error('Error loading chart data:', error));