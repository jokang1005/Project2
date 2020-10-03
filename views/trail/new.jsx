const { data } = require("jquery");
const React = require("react")
const Layout = require("../layout.jsx")

class New extends React.Component {
    render() {
        return(
            <Layout>
                <h1>New Trail</h1>
            
                <form action="/trail/" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Trail Name</label>
                        <input type="text" class="form-control" name="name" id="trailname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageURL">Image URL</label>
                        <input type="text" name="image" class="form-control" id="imageURL"/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dog_friendly"/>
                        <label htmlFor="dog_friendly" for="dog_friendly" name="dog_friendly" value="" className="form-check-label">Dog-friendly</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="public"/>
                        <label htmlFor="public" value="" for="public" name="public" className="form-check-label">Make Public</label>
                    </div>
                    <div className="button">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    </form>
            </Layout>
        )
    }
}

module.exports = New;