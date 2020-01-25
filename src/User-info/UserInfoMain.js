import React from 'react';
import { Component } from 'react';
import Nav from '../Components/Nav/Nav';
import CompareWorkouts from './ComapreWorkouts';
import PastWorkouts from '../PastWorkouts/PastWorkouts';
import TotalPizzaEarned from './TotalPizzaEarned'
import UserStats from './UserStats/UserStats'


class UserInfo extends Component {
    render() {
        return (
            <div>
                <Nav />
                <CompareWorkouts />
                <TotalPizzaEarned />
                <UserStats />
                <PastWorkouts />
                test
            </div>
        )
        }
}

export default UserInfo