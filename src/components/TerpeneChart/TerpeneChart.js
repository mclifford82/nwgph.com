import React from 'react';
import Chart from 'chart.js';

const debug = true;

const COLORS = [
  { // red
    color: '#c5383b',
    highlight: '#FF5A5E',
  }, { // teal
    color: '#46BFBD',
    highlight: '#5AD3D1',
  }, { // yellow
    color: '#FDB45C',
    highlight: '#FFC870',
  }, { // orange
    color: '#c55d1a',
    highlight: '#E47833',
  }, { // light blue
    color: '#3db0f7',
    highlight: '#87cefa',
  }, { // dark blue
    color: '#4837b5',
    highlight: '#6a5acd',
  }, { // orange
    color: '#52007f',
    highlight: '#a500ff',
  },
]

class TerpeneChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      options: {
        layout: {
          padding: { top: 15 }
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontFamily: 'Catamaran, sans-serif',
            padding: 20,
          }
        },
        animation: {
          easing: 'easeOutBounce',
          duration: 1300,
        },
        title: {
          display: true,
          text: 'Terpene Report',
        },
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 3,
        percentageInnerCutout: 40,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        animateScale: false,
      }
    }
  }

  componentDidUpdate() {
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.chart = new Chart(this.canvas, {
      type: 'doughnut',
      options: this.state.options,
      data: this.state.data,
    });
  }

  componentDidMount() {
    this.loadDataToState();
  }

  loadDataToState() {
    const labels = this.generateLabels();
    const data = this.generateData();
    const colors = this.generateColors();
    const highlights = this.generateHighlights();
    this.setState({
      data: {
        datasets: [{
          data: data,
          backgroundColor: colors,
          borderColor: highlights,
          borderWidth: [3, 3, 3, 3, 3, 3]
        }],
        labels: labels,

      }
    });
  }

  generateColors() {
    const colors = [];
    for (let i = 0; i < COLORS.length; i++) {
      const element = COLORS[i];
      colors[i] = element.color;
    }
    debug && console.log('Debug: Colors =', colors);
    return colors;
  }

  generateHighlights() {
    const highlights = [];
    for (let i = 0; i < COLORS.length; i++) {
      const element = COLORS[i];
      highlights[i] = element.highlight;
    }
    debug && console.log('Debug: Highlight =', highlights);
    return highlights;
  }

  generateLabels() {
    const labels = [];
    for (let i = 0; i < this.props.terpenes.length; i++) {
      const element = this.props.terpenes[i];
      labels[i] = element.name;      
    }
    debug && console.log('Debug: Labels =', labels);
    return labels;
  }

  generateData() {
    const data = [];
    for (let i = 0; i < this.props.terpenes.length; i++) {
      const element = this.props.terpenes[i];
      data[i] = element.amount;
    }
    debug && console.log('Debug: Data =', data);
    return data;
  }

  render() {
    return (
      <div>
        <canvas id="terpeneChart" width="400" height="400"></canvas>
      </div>
    )
  }
}

export default TerpeneChart;