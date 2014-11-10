/**
 * @jsx React.DOM
 */

var React = require('react');
var d3 = require('d3');
var assign = require('object-assign');

var Node = require('./Node.jsx');
var Link = require('./Link.jsx');

var Graph = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    network: React.PropTypes.object.isRequired,
    linkSize: React.PropTypes.number,
    charge: React.PropTypes.number,
    nodeRadius: React.PropTypes.number,
    onClickNode: React.PropTypes.func,
    onMouseLeaveNode: React.PropTypes.func,
    onMouseEnterNode: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      nodeRadius: 10,
      linkDistance: 30,
      charge: -120
    };
  },

  getInitialState () {
    return {
      nodes: this.props.network.nodes,
      links: this.props.network.links
    };
  },

  componentWillMount() {
    var force = d3.layout.force()
      .charge(this.props.charge) 
      .linkDistance(this.props.linkDistance)
      .size([this.props.width, this.props.height]);

    var forceNodes = force.nodes();
    var forceLinks = force.links();

    this.state.nodes.forEach((n) => forceNodes.push(n));
    this.state.links.forEach((l) => forceLinks.push(l));

    force.start();

    force.on('tick', () => {
      this.setState({
        nodes: forceNodes,
        links: forceLinks
      });
    });
  },

  render() {
    var _this = this;
    var nodesElements = Object.keys(this.state.nodes).map((key, i) =>
      <Node key={i}
        r={this.props.nodeRadius}
        cx={this.state.nodes[key].x}
        cy={this.state.nodes[key].y}
        onClick={this.props.onClickNode}
        onMouseEnter={this.props.onMouseEnterNode}
        onMouseLeave={this.props.onMouseLeaveNode}
        node={this.state.nodes[key]}/>);

    var linksElements = this.state.links.map((link, i) => {
      return <Link key={i}
        link={link}
        strokeWidth={link.value}
        source={link.source}
        target={link.target}/>});

    return (
      <svg width={this.props.width} height={this.props.height}>
        {linksElements}
        {nodesElements} 
      </svg>
    );
  }

});

module.exports = Graph;
