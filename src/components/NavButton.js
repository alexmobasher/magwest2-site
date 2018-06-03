import React, { Component } from 'react';
import {Grid, Typography} from '@material-ui/core';
import Link from './Link';
import DefaultIcon from '@material-ui/icons/QuestionAnswer';

class NavButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      style: this.defaultStyle()
    }
  }

  defaultStyle = (newStyle) => {
    let propStyle = Object.assign({}, this.props.style ? this.props.style : {});
    let madeStyle = Object.assign({ textAlign: 'center', width: 75, height: 75, margin: '0', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'blue', borderRadius: 50}, propStyle);
    return Object.assign(madeStyle, newStyle);
  }

  onMouseEnter = () => {
    this.setState({style: this.defaultStyle({backgroundColor: 'slateblue'})})
  }

  onMouseLeave = () => {
    this.setState({style: this.defaultStyle()})
  }

  onMouseDown = () => {
    this.setState({style: this.defaultStyle({backgroundColor: 'steelblue'})})
  }

  onMouseUp = () => {
    this.setState({style: this.defaultStyle({backgroundColor: 'slateblue'})})
  }

  render(){
    var Icon = this.props.icon ? this.props.icon : DefaultIcon;
    var iconProps = this.props.iconProps ? this.props.iconProps : {style: { width: '75%', height: '75%'}};

    return(
      <div style={this.state.style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
        <Link target={this.props.target ? this.props.target : ''} to={this.props.to}>
          <Icon {...iconProps}  />
          <Typography>
            {`${this.props.title ? this.props.title : ''}`}
          </Typography>
        </Link>
      </div>)
  }
}

export default NavButton;