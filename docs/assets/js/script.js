// Fake carbon footprint data for the years
const carbonData = {
  2020: 1200,  // CO2 emissions in tons for 2020
  2021: 1100,  // CO2 emissions in tons for 2021
  2022: 950    // CO2 emissions in tons for 2022
};

// Event listener for the year selection dropdown
document.getElementById("yearSelect").addEventListener("change", function () {
  const selectedYear = this.value;

  // Check if a valid year is selected
  if (selectedYear) {
    // Update CO2 emission output based on selected year
    document.getElementById("co2").innerText = carbonData[selectedYear];
  } else {
    // Reset to zero if no valid year is selected
    document.getElementById("co2").innerText = "0";
  }
});

// Function to render the bar chart
function renderChart() {
  const ctx = document.getElementById('carbonChart').getContext('2d');
  
  // Data for the bar chart
  const chartData = {
    labels: ['2020', '2021', '2022'],
    datasets: [{
      label: 'CO2 Emissions (tons)',
      data: [carbonData[2020], carbonData[2021], carbonData[2022]],
      backgroundColor: ['#2196F3', '#4CAF50', '#FFC107'],
      borderColor: ['#1976D2', '#388E3C', '#FFA000'],
      borderWidth: 1
    }]
  };
  
  // Configuration of the chart
  const chartConfig = {
    type: 'bar',  // Bar chart type
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,  // Ensure the y-axis starts at zero
          title: {
            display: true,
            text: 'CO2 Emissions (tons)'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.raw + ' tons';
            }
          }
        }
      }
    }
  };
  
  // Create the chart
  new Chart(ctx, chartConfig);
}

// Render the chart initially when the page loads
renderChart();
