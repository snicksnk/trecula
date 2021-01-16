import React from "react";
import Dashboard from "./Dashboard";
import "./styles.css";
import Layout from './components/Layout';

import 'antd/dist/antd.css';
//import 'antd/dist/antd.dark.css';

export default function App() {
  return (<Layout>
  <Dashboard />
  </Layout>);
}
