/**
 * @jsx React.DOM
 */

var React = require('react');
var Graph = require('../dist/react-graph.js');

var network = require('./data.js');

require('./example.css');

var Tooltip = React.createClass({
  render() {
    if(this.props.show){
      var style = {
        left: this.props.x,
        top: this.props.y
      };

      return (
        <div className="tooltip" style={style}>
          {this.props.content}
        </div>
      );
    }else{
      return null;
    }
  }
});

var Example = React.createClass({
  getInitialState(){
    return {
      showTooltip: false,
      tooltipPosition: {x: 0, y: 0},
      tooltipContent: ""
    };
  },

  _nodeClick(e, node){
    this.setState({
      tooltipContent: JSON.stringify(node),
      tooltipPosition: {
        x: e.target.getAttribute('cx'),
        y: e.target.getAttribute('cy')
      },
      showTooltip: true
    });
  },

  _enterNode(e, node){
    this.setState({
      tooltipContent: JSON.stringify(node),
      tooltipPosition: {
        x: e.target.getAttribute('cx'),
        y: e.target.getAttribute('cy')
      },
      showTooltip: true
    });
  },

  _leaveNode(e, node){
    this.setState({
      showTooltip: false
    });
  },

  render() {
    return (
      <div>
        <Tooltip show={this.state.showTooltip}
          content={this.state.tooltipContent}
          y={this.state.tooltipPosition.y}
          x={this.state.tooltipPosition.x}/>

        <Graph 
          onMouseEnterNode={this._enterNode}
          onMouseLeaveNode={this._leaveNode}
          onClickNode={this._nodeClick}
          nodeRadius={5}
          width={600}
          height={500}
          network={network}/> 
      </div>
    );
  }
});


React.render(<Example />,
  document.getElementById('react-content'));
