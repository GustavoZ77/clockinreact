import React from 'react';
import {SpCountDownTimer} from './SpCountDownTimer'
import './SpClockComponent.css';

class SpclockComponent extends React.Component {
  defaultEntry = "Jul 16, 2019";

  state = {
    spTime: SpCountDownTimer(this.defaultEntry)
  };

 componentDidMount = () => {
   this.intervalID = setInterval(
     () => this.updateTime(""),
     1000
   );
 }

 componentWillUnmount = () => {
   clearInterval(this.intervalID);
 }

 updateTime = (entryData) => {
   this.setState({
     spTime: SpCountDownTimer(entryData || this.defaultEntry)
   });
 }
  render() {
   return (
     <div className="spClock" >
       <ul>
         <li className="spClock-item" >
            {this.state.spTime.days}
            <span className="spClock-label" >Days</span>
         </li>
         <li className="spClock-item" >
            {this.state.spTime.hours}
            <span className="spClock-label" >Hours</span>
          </li>
         <li className="spClock-item" >
            {this.state.spTime.minutes}
            <span className="spClock-label" >Minutes</span>
         </li>
         <li className="spClock-item" >
            {this.state.spTime.seconds}
            <span className="spClock-label" >Seconds</span>
          </li>
       </ul>
     </div>
   );
 }
}

export default SpclockComponent;
