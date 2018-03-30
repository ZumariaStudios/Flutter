import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';


class SetReminderPage extends React.Component {
  constructor(props) {
    super(props);
    this.nextSection = this.nextSection.bind(this);
    this.localStore = this.localStore.bind(this);
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  nextSection() {
        let retrievedVisited = localStorage.getItem('visited');
        let visited = JSON.parse(retrievedVisited);
        console.log('visited: ' + visited);

        if (visited) {
          this.props.history.push('/FinalResultsPage');
        } else {
          this.localStore('visited', true);
          this.props.history.push('/InputBloodChemistryPage');
        }
  }



  render() {
    return (

      <div className ="inputBottomPage">
       <Header header="I'll be happy to remind you in..." />
      <form className ="form">
          <input
           className="reminder"
           type='submit'
           value='1 Hour'
           onClick={this.nextSection}/>
           <input
            className="reminder"
            type='submit'
            value='1 Week'
            onClick={this.nextSection}/>
            <input
            className="reminder"
            type='submit'
            value='1 Month'
            onClick={this.nextSection}/>
             <input
            className="never"
            type='submit'
            value='Never'
            onClick={this.nextSection}/>
      </form></div>
    );
  }
}

export default withRouter(SetReminderPage);
