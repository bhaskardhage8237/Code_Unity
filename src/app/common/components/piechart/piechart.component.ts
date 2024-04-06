import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  ngOnInit(): void {
    this.drawNewsletter();
    this.loadGoogleCharts();
  }

  loadGoogleCharts() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.gstatic.com/charts/loader.js';

 
    script.onload = () => {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(() => {
        this.drawChart();  
      });
    };

    document.body.appendChild(script);
  }

  drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day', { role: 'tooltip', type: 'string', p: { html: true } }],
      ['0 to 18.75', 12, 'Negative Payment Adjustment -9 %'],
      ['18.76 to 74.99', 10, 'Negative Payment Adjustment -9 % to 0 %'],
      ['75.01 to 88.99', 6, 'Positive Payment Adjustment  > 0 %'],
      ['89 to 100', 12, '> 0 % + 0.5 - 10%  Exceptional Performance Bonus'],
       
    ]);

    const options = {
      title: 'Performance Threshold',
      slices: {
        0: { color: 'green'},
        1: { color: 'blue' },
        2: { color: 'orange' },
        3: { color: 'red' },
        4: { color: 'gray' }
      }
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


  drawNewsletter() {
    // Draw your newsletter content here using DOM manipulation or Angular templates
    var newsletterDiv = document.getElementById('newsletter');
    // newsletterDiv.innerHTML = `
    //   <h1>Title Of Newsletter (MIPS 2022 - Track your MIPS measures Performance!)</h1>
    //   <!-- Add other content as per your requirement -->
    // `;
  }
}
