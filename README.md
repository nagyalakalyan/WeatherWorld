
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link rel="stylesheet" href="./weather.css">
    <link rel="icon" href="./about to rain.png">
</head>
<body>
    <fieldset>
        <p id="headline">WEATHER WORLD</p>
        <label for="inpu" id="city_input">Enter the city</label>
        <br>
        <input type="text" id="inpu">
        <button onclick=getDetails()>Get Weather</button>
        <table cellspacing="30px" >
            <tr>
                <td>Temperature :</td>
                <td id="temperature"></td>
            </tr>
            <tr>
                <td>Humidity    :</td>
                <td id="humidity"></td>
            </tr>
            <tr>
                <td>Wind speed  :</td>
                <td id="windspeed"></td>
            </tr>
            <tr>
                <td>Pressure    :</td>
                <td id="pressure"></td>
            </tr>
            <tr>
                <td>Visibility  :</td>
                <td id="visibility"></td>
            </tr>
        </table>
    </fieldset>
    <p id="tagline">Made with ❤️ by KALYAN</p>
    <script src="./weather.js"></script>
</body>
</html>
