import Root from './Root';
import PropTypes from 'prop-types';

import { renderChart } from '../utils/nodes';

class Chart extends Root {
  static propTypes = {
    placement: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      weight: PropTypes.number,
      height: PropTypes.number
    }),
    border: PropTypes.shape({
      pt: PropTypes.string,
      color: PropTypes.string
    }),
    chartColors: PropTypes.string,
    chartColorsOpacity: PropTypes.string,
    data: PropTypes.object,
    fill: PropTypes.string,
    holeSize: PropTypes.number,
    invertedColors: PropTypes.string,
    legendFontSize: PropTypes.string,
    legendColor: PropTypes.string,
    legendPos: PropTypes.string,
    layout: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      w: PropTypes.number,
      h: PropTypes.number
    }),
    showDataTable: PropTypes.bool,
    showDataTableKeys: PropTypes.bool,
    showDataTableHorzBorder: PropTypes.bool,
    showDataTableVertBorder: PropTypes.bool,
    showDataTableOutline: PropTypes.bool,
    showLabel: PropTypes.bool,
    showLegend: PropTypes.bool,
    showTitle: PropTypes.bool,
    showValue: PropTypes.bool,
    type: PropTypes.oneOf([
      'area',
      'bar',
      'bubble',
      'line',
      'scatter',
      'pie',
      'doughnut'
    ]),
    title: PropTypes.string,
    titleAlign: PropTypes.string,
    titleColor: PropTypes.string,
    titleFontFace: PropTypes.string,
    titleFontSize: PropTypes.number,
    titlePos: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    titleRotate: PropTypes.number
  };

  static defaultProps = {};

  constructor(root, props) {
    super(root, props);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = null;
  }

  getType() {
    const { root: { pptx: { charts } } } = this;
    const { type } = this.props;

    return charts[type.toUpperCase()];
  }

  async render() {
    await renderChart(
      this.getType(),
      this.props.data,
      this.getProps(),
      this.parent.slide
    );
  }
}

export default Chart;
