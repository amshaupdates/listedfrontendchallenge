import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Notification from '../assets/image/notification-icon.png';
import Profile from '../assets/image/profile-thumbnail.png';
import DashboardIcon from '../assets/image/dashboard.png';
import TransactionIcon from '../assets/image/transaction-icon.png';
import SchedulesIcon from '../assets/image/schedules_icon.png';
import UsersIcon from '../assets/image/user_icon.png';
import SettingIcon from '../assets/image/setting_icon.png';
import Chart from '../Components/Chart/Chart';
import PieChart from '../Components/Chart/PieChart';
import TotalRevenueIcon from '../assets/image/total_revenue_icon.png';
import TotalTransactionsIcon from '../assets/image/total_transactions_icon.png';
import TotalLikesIcon from '../assets/image/total_likes_icon.png';
import TotalUsersIcon from '../assets/image/total_users_icon.png';
import SeeAllIcon from '../assets/image/see_all_icon.png';
import SearchIcon from '../assets/image/search_icon.png';
import axios from 'axios';

const Dashboard = () => {
    const [totals, setTotals] = useState(null);
    const [lineChartData, setLineChartData] = useState(null);
    const [pieChartData, setPieChartData] = useState(null);
    
    const fetchTotals = async () => {
        try {
            // This is just a dummy API used to get some dynamic data
            // It might not be relevant to the dataset we required as per figma
            const response = await axios.get('https://dummyjson.com/products/1');
            setTotals(response?.data);
        } catch(error) {
            console.log(error);
        }
    };

    const fetchChartData = async () => {
        try {
            const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            console.log(response?.data?.data);
            setLineChartData(response?.data?.data);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTotals();
        fetchChartData();
    }, []);

    return (
        <div className='dashboard-main'>
            <div className='dashboard-left-main'>
                <div className='nav-parent'>
                    <div className='dashboard-heading'>
                        <h1>Board.</h1>
                    </div>
                    <div className='nav-link-parent'>
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img className='nav-link-icon' src={DashboardIcon} alt='Dashboard' /> Dashboard</NavLink>
                        <NavLink to='#' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img className='nav-link-icon' src={TransactionIcon} alt='Dashboard' /> Transactions</NavLink>
                        <NavLink to='#' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img className='nav-link-icon' src={SchedulesIcon} alt='Dashboard' /> Schedules</NavLink>
                        <NavLink to='#' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img className='nav-link-icon' src={UsersIcon} alt='Dashboard' /> Users</NavLink>
                        <NavLink to='#' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img className='nav-link-icon' src={SettingIcon} alt='Dashboard' /> Settings</NavLink>
                    </div>
                    <div className='nav-bottom'>
                        <NavLink to='#' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Help</NavLink>
                        <NavLink to='#' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact Us</NavLink>
                    </div>
                </div>
            </div>
            <div className='dashboard-right-main'>
                <div className='header'>
                    <div><h1>Dashboard</h1></div>
                    <div className='header-right'>
                        <input
                            type="text"
                            className='search'
                            placeholder='Search...'
                        />
                        <img src={Notification} alt="notification" />
                        <img src={Profile} alt="profile" />
                    </div>
                </div>
                <div className='dashboard-totals'>
                    <div className='total-revenue totals-img-style'>
                        <img src={TotalRevenueIcon} alt='total-revenue' />
                        <p>Total Revenues</p>
                        <h2>${totals?.price}</h2>
                    </div>
                    <div className='total-transactions totals-img-style'>
                        <img src={TotalTransactionsIcon} alt='total-transactions' />
                        <p>Total Transactions</p>
                        <h2>{totals?.stock}</h2>
                    </div>
                    <div className='total-likes totals-img-style'>
                        <img src={TotalLikesIcon} alt='total-likes' />
                        <p>Total Likes</p>
                        <h2>{Math.round(totals?.discountPercentage)}</h2>
                    </div>
                    <div className='total-users totals-img-style'>
                        <img src={TotalUsersIcon} alt='total-users' />
                        <p>Total Users</p>
                        <h2>{Math.round(totals?.rating)}</h2>
                    </div>
                </div>
                <div className='dashboard-chart'>
                    <h2>Activities</h2>
                    <Chart data={lineChartData}/>
                </div>
                <div className='dashboard-pie-chart'>
                    <div className='pie-chart'>
                        <h2>Top products</h2>
                        <PieChart data={pieChartData}/>
                    </div>
                    <div className='today-schedule'>
                        <div className='schedule-and-see'>
                            <h2>Today's Schedule</h2>
                            <p>See All <img src={SeeAllIcon} alt='see-all' /></p>
                        </div>
                        <div className='schedule-item'>
                            <h5>Meeting with suppliers from Kuta Bali</h5>
                            <p>14.00-15.00</p>
                            <p>at Sunset Road, Kuta, Bali </p>
                        </div>
                        <div className='schedule-item2'>
                            <h5>Meeting with suppliers from Kuta Bali</h5>
                            <p>14.00-15.00</p>
                            <p>at Sunset Road, Kuta, Bali </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;