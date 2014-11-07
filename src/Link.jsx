/**
 * @jsx React.DOM
 */

var React = require('React');

var Link = React.createClass({
  getPath(){
    var start = {x: this.props.source.x, y: this.props.source.y};
    var end = {x: this.props.target.x, y: this.props.target.y};

    return `M${start.x},${start.y}L${end.x},${end.y}`;
  },
  render() {
    return (
      <path className="link"
        strokeWidth={Math.sqrt(this.props.strokeWidth)}
        d={this.getPath()} />
    );
  }

});

module.exports = Link;
