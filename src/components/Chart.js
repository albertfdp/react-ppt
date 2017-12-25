import Root from './Root';
import PropTypes from 'prop-types';

import { validateProps } from '../validators';
import { renderChart } from '../utils/nodes';

class Chart extends Root {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.number,
    h: PropTypes.number,
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
    super(root, props, Chart.defaultProps);

    validateProps(Chart.propTypes, this.props);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = null;
  }

  getProps() {
    const props = Object.keys(this.props)
      .filter(prop => prop !== 'children' && prop !== 'data')
      .reduce((props, key) => {
        props[key] = this.props[key] || Chart.defaultProps[key];

        return props;
      }, {});

    return props;
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
