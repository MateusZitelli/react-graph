/**
 * @jsx React.DOM
 */

var React = require('react');
var cx = require('./utils/cx.js');

var Node = React.createClass({
  getDefaultProps(){
    return {
      onMouseClick: function(){},
      onMouseLeave: function(){},
      onMouseEnter: function(){}
    };
  },

  getInitialState() {
    return {
      hover: false
    };
  },

  _handleOnClick(e) {
    if(!!this.props.onClick){
      this.props.onClick.call(null, e, this.props.node);
    }
  },

  _handleEnter(e){
    this.props.onMouseEnter.call(null, e, this.props.node);

    this.setState({
      hover: true
    });
  },

  _handleLeave(e){
    this.props.onMouseLeave.call(null, e, this.props.node);

    this.setState({
      hover: false
    });
  },

  render() {
    var classes = cx([
      "group-" + this.props.node.group,
      ["hovered", this.state.hover]
    ]);

    return (
      <circle className={classes} 
        cx={this.props.cx} 
        cy={this.props.cy} 
        r={this.props.r}
        onMouseEnter={this._handleEnter}
        onMouseLeave={this._handleLeave}
        onClick={this._handleOnClick}/>
    );
  }

});

module.exports = Node;
