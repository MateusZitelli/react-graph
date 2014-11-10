/**
 * @jsx React.DOM
 */

var React = require('react');
var Graph = require('../dist/react-graph.js');

var network = require('./data.js');

require('./example.css');

var nodeClick = function(e){
  console.log(e, this);
};

var enterNode = function(e){
  console.log(e, this);
};

var leaveNode = function(e){
  console.log(e, this);
};

React.render(
  <Graph 
    onMouseEnterNode={enterNode}
    onMouseLeaveNode={leaveNode}
    onClickNode={nodeClick}
    nodeRadius={5}
    width={600}
    height={500}
    network={network}/>, 
  document.getElementById('react-content'));
