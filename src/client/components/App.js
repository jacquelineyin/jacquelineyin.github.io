import React from "react";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
    return (
        <Layout>
            <Header>Header</Header>
            <div>
                <h2>Jackie's Website</h2>
            </div>
        </Layout>
    )
}

export default (App);