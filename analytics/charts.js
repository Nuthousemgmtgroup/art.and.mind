const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: { labels: ['Signups','Donations','Feedback'], datasets:[{label:'Totals',data:[5,10,3]}] },
});
