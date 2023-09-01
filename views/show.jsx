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
            <p>{bread.getBakedBy()} &#10084;</p>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <form method="POST" action={`/breads/${bread.id}?_method=DELETE`}>
                <input type="submit" value="DELETE"/>
            </form>

            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Show