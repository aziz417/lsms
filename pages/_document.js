import React from "react";


// import '../public/plugins/fontawesome-free/css/all.min.css'
// import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
// import '../public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'
// import '../public/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
// import '../public/plugins/jqvmap/jqvmap.min.css'
// // import '../public/dist/css/adminlte.min.css'
// import '../public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
// import '../public/plugins/daterangepicker/daterangepicker.css'
// import '../public/plugins/summernote/summernote-bs4.min.css'

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">

                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
                    <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css" />
                    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                    <link rel="stylesheet" href="../plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
                    <link rel="stylesheet" href="../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
                    <link rel="stylesheet" href="../plugins/jqvmap/jqvmap.min.css" />
                    <link rel="stylesheet" href="../dist/css/adminlte.min.css" />
                    <link rel="stylesheet" href="../plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
                    <link rel="stylesheet" href="../plugins/daterangepicker/daterangepicker.css" />
                    <link rel="stylesheet" href="../plugins/summernote/summernote-bs4.min.css" />
                </Head>


                <body className="text-blueGray-700 antialiased">
                    <div id="page-transition"></div>
                    <Main />
                    <NextScript />

                    <script src="../plugins/jquery/jquery.min.js"></script>
                    <script src="../plugins/jquery-ui/jquery-ui.min.js"></script>
                    <script>
                        $.widget.bridge('uibutton', $.ui.button)
                    </script>
                    <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="../plugins/chart.js/Chart.min.js"></script>
                    <script src="../plugins/sparklines/sparkline.js"></script>
                    <script src="../plugins/jqvmap/jquery.vmap.min.js"></script>
                    <script src="../plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
                    <script src="../plugins/jquery-knob/jquery.knob.min.js"></script>
                    <script src="../plugins/moment/moment.min.js"></script>
                    <script src="../plugins/daterangepicker/daterangepicker.js"></script>
                    <script src="../plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
                    <script src="../plugins/summernote/summernote-bs4.min.js"></script>
                    <script src="../plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
                    <script src="../dist/js/adminlte.js"></script>
                    {/* <script src="../dist/js/demo.js"></script> */}
                    <script src="../dist/js/pages/dashboard.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
