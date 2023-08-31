const React = require('react')
const Default = require('./layouts/default')

function NotFound () {
    return (
        <Default>
            <img src="https://http.cat/images/404.jpg" alt="404" />
        </Default>
    )
}

module.exports = NotFound