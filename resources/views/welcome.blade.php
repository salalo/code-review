<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <title>Code Review</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=latin-ext" rel="stylesheet">
        <!-- material design lite packages -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
        <!-- color palette for MDL -->
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.orange-blue.min.css" />
        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <style>
            body{
                font-family: 'Roboto', sans-serif;
                background-color: #202124;
                padding: 0 !important;
                margin: 0 !important;
            }
        </style>
    </head>
    <body>
        <div id="app">
             <welcome></welcome>
        </div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
