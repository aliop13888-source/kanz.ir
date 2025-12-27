// progress.js
const palette = {
    blue: '#0073e6',
    yellow: '#ffcc00',
    navy: '#004080',
    teal: '#2bbbad',
    orange: '#ff8c42',
    green: '#2ecc71'
  };
  
  function makeChart(id, type, labels, data, color) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
      type,
      data: {
        labels,
        datasets: [{
          label: 'پیشرفت',
          data,
          backgroundColor: color,
          borderColor: color,
          fill: type === 'line' ? false : true,
          tension: 0.3
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } }
        }
      }
    });
  }
  
  const labels4 = ['فصل 1', 'فصل 2', 'فصل 3', 'فصل 4'];
  makeChart('chart-science', 'bar', labels4, [80, 65, 90, 75], palette.blue);
  makeChart('chart-math', 'line', labels4, [50, 62, 78, 86], palette.yellow);
  makeChart('chart-physics', 'bar', labels4, [40, 55, 70, 82], palette.teal);
  makeChart('chart-chemistry', 'line', labels4, [35, 60, 68, 79], palette.orange);
  makeChart('chart-biology', 'doughnut', ['سلول', 'ژنتیک', 'گیاه', 'جانور'], [72, 43, 61, 85], [palette.navy, palette.blue, palette.yellow, palette.orange]);
  makeChart('chart-persian', 'radar', ['املاء','نگارش','قرائت','ادبیات'], [85, 70, 90, 65], palette.green);
  
  // آمار نمایشی
  document.getElementById('stat-notes').textContent = '۱۲ جزوه';
  document.getElementById('stat-exams').textContent = '۵ آزمون';
  document.getElementById('stat-average').textContent = '۷۶٪';