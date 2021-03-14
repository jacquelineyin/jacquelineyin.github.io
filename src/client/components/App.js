import React from "react";
import { Layout } from 'antd';
import './App.css';
import { HeaderContent } from "./Header/HeaderContent";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
    return (
        <Layout>
            <Header id='main-header'>
                <ErrorBoundary>
                <HeaderContent/>
                </ErrorBoundary>
            </Header>
            
        </Layout>
    )
}

export default (App);