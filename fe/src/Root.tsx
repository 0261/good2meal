import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import './Global.css';

import App from './components/App';

const { Header, Footer, Content } = Layout;
const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Header className='root-logo'>Good2Meal</Header>
                <Content className='root-content'>
                    <App></App>
                </Content>
                <Footer className='root-footer'>Footer</Footer>
            </Layout>
        </BrowserRouter>
    );
};

export default Root;
