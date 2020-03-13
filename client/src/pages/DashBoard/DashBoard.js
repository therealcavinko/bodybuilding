import React, { Component } from 'react';
import DashBoardComponent from '../../components/DashBoard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
//--------------------------------------------------
class DashBoard extends Component {
  state = {
    userId: localStorage.getItem('userId'),
    currentDayId: '',
    firstName: '',
    lastName: '',
    redirect: false,
    exerciseMins: 0,
  };

  totalExerciseMinutes(arr) {
    let totalMinutes = 0;
    for (let i = 0; i < arr.length; i++) {
      totalMinutes = totalMinutes + arr[i].duration;
    }

    if (totalMinutes) {
      return totalMinutes;
    } else {
      return 0;
    }
  }

  componentDidMount() {
    this.setState({ userId: localStorage.getItem('userId') });
    let todaysDate = moment().format('MM.DD.YYYY');

    let url = `/api/bodybuilding/user/${localStorage.getItem('userId')}`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );

    axios.get(url).then(res => {
      let user = res.data;
      let mostRecentDate = moment()
        .add(-1, 'days')
        .format('MM.DD.YYYY');

      if (user.days.length) {
        mostRecentDate = moment(user.days[0].date).format('MM.DD.YYYY');
      }

      if (mostRecentDate === todaysDate) {
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          exerciseMins: res.data.days[0].totalActivity,
          currentDayId: res.data.days[0].id,
        });

      } 
      
      else {
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
        });

        axios
          .post('/api/bodybuilding/newDay', {
            userId: this.state.userId,
            date: moment().format('MM.DD.YYYY')
          })
          .then(res => {
            this.setState({ currentDayId: res.data._id });
          });
      }
    });
  }

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <DashBoardComponent
          exercise={this.state.exerciseMins}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
      </div>
    );
  }
}

export default DashBoard;