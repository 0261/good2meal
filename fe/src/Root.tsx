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
                <Header className='root-logo'></Header>
                <Content className='root-content'>
                    <App></App>
                </Content>
            </Layout>
        </BrowserRouter>
    );
};

export default Root;
