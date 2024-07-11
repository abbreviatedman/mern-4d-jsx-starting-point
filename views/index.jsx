const React = require('react');

const Home = () => {
    return (
        <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
                <title>Pokemon App</title>
            </head>
            <body>
                <h1>Welcome to our Pokemon App</h1>
                <br />
                <br />
                <a href="/signUp">Sign Up for this app</a>
                <br />
                <br />
                <a href="/logIn">Log In to your account on this app</a>
                <br />
                <br />
                <a href="/allMons">See all the Pokemon in the database</a>
            </body>
        </html>
    )
}

module.exports = Home;