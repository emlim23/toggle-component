import React, {Component} from 'react';
import styled, {css, keyframes} from 'styled-components';

const defaultColors = css`
  border-radius: 20px;
  border: 1px solid #e8e8e8;
  background-color: #fafafa;
`

const jerk = keyframes`
  0% {
      transform: scaleX(1);
  }
  50% {
      transform: scaleX(1.2);
  }
  100% {
      transform: scaleX(1);
  }
`

const transitions = css`
  left: 2px;
  ${ props => props.on && 'left: 22px;'}
  transition: left .3s;
`

const SwitchWrap = styled.div`
  ${defaultColors}
  height: 20px;
  width: 40px;
  padding: 2px;
  position: relative;
  display: block;
  cursor: pointer;
  ${ props => props.on && 'background-color: #95e398;' }
  transition: background-color .3s;
  &:active span{
    transform-origin: ${ props => props.on ? 'right' : 'left'};
    animation-name: ${jerk};
    animation-duration: .4s;
    animation-iteration-count: infinite;
  }
`

const Toggler = styled.span`
  ${defaultColors}
  height: 18px;
  width: 18px;
  display: block;
  position: absolute;
  z-index: 1;
  ${transitions}
`

  // animation-direction: alternate-reverse;

const Shadow = styled.span`
  border-radius: 20px;
  height: 18px;
  width: 18px;
  position: absolute;
  background-color: #e7e7e7;
  top: 7px;
  opacity: .6;
  ${transitions}
`

export default class Switch extends Component{
  static defaultProps = { on: false }

  render(){
    // {...this.props}
    return <SwitchWrap {...this.props}>
      <Toggler on={this.props.on} />
      <Shadow on={this.props.on} />
    </SwitchWrap>
  }
}
