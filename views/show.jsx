const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
    console.log(bread.name)

    return (
        <Default>
            <h3>
                {bread.name}
            </h3>
            <p>
                This bread
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does not </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />

            <a href={`/breads/${index}/edit`}><button>Edit</button></a>
            <form method="POST" action={`/breads/${index}?_method=DELETE`}>
                <input type="submit" value="DELETE"/>
            </form>

            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Show