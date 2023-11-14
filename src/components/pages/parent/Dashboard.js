import React from 'react';
import { Layout } from 'antd';
import FeeHistory from './FeeHistory';
import NavAuth from '../../layout/NavAuth';

const Dashboard = () => {
    return (
        <>
            <NavAuth />
            <Layout style={{ padding: '0px 24px 24px' }}>
                <Layout.Content style={{ padding: '24px' }} className='text-center'>
                    <h1>Dashboard</h1>
                    <p>Welcome to your parent dashboard!</p>
                    <p>Here you can manage your child's school fees, track their academic progress, and communicate with their teachers.</p>
                </Layout.Content>
                <FeeHistory />
            </Layout>
        </>
    );
};

export default Dashboard;
