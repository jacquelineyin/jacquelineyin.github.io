import React from "react";
import { Layout } from 'antd';
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { HeaderContent } from "./Header/HeaderContent";
import { About } from "./About/About"
import './App.css';

const { Header, Content } = Layout;

const App = () => {
    return (
        <ErrorBoundary>
            <Layout>
                <Header id='main-header'>
                    <HeaderContent />
                </Header>

                <Content id='content'>
                    <About profileImg={null} />
                </Content>

            </Layout>
        </ErrorBoundary>
    )
}

export default (App);