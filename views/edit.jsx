const React = require('react')
const Default = require('./layouts/default')

function Edit({bread, index}) {
    return (
        <Default>
          <h2>Add a new bread</h2>
          <form action={`/breads/${index}?_method=PUT`} method="POST">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              defaultValue={bread.name}
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              defaultValue={bread.image}
            />
            <label htmlFor="hasGluten">Has Gluten?</label>
            <input
              type="checkbox"
              name="hasGluten"
              id="hasGluten"
              defaultChecked={bread.hasGluten}
            />
            <br />
            <input type="submit"/>
          </form>
          <div className='backButton'>
              <a href="/breads">Go back to the index</a>
          </div>
        </Default>
      )
  
}

module.exports = Edit