import React from 'react';
import './UserStats.css'
import UserStatsOrderedList from './UserStatsOrderedList'

function UserStats(props) {
    return (
        <div className="userStats">
        <UserStatsOrderedList />
        </div>
    )
}

export default UserStats;