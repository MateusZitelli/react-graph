/**
 * @jsx React.DOM
 */

var React = require('React');

var Node = React.createClass({

  render() {
    var groupClass = "group-" + this.props.node.group;

    return (
      <circle className={"node " + groupClass} 
        cx={this.props.cx} 
        cy={this.props.cy} 
        r={this.props.r}/>
    );
  }

});

module.exports = Node;
