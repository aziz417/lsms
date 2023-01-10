import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import '../styles/globals.css'
import 'react-dropzone-uploader/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Provider } from "react-redux";
import store from "../src/store/index";


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <Provider store={store}>
        <React.Fragment>
          <Head>
            {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Notus NextJS by Creative Tim</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
          </Head>
          <ToastContainer />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.Fragment>
      </Provider>
    );
  }
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
