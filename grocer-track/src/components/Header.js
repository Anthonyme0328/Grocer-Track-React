import React from 'react';
import './style.css';

export class Header extends React.Component {
  render (){
    return(
      <div>
        <div className= 'headingBox'>
          <header className = 'heading'>
            Grocery Tracker
          </header>
        </div>
      </div>
    )
  }
}