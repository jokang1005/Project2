const React = require("react");
const Layout = require("../layout");

class Edit extends React.Component {
    render() {
        const {trail} = this.props;
        return(
            <Layout>
                <h1>Edit Trail</h1>
                
                <form action={`/trail/${trail._id}?method=PUT`} enctype="multipart/form-data" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Trail Name</label>
                        <input type="text" value={trail.name} className="form-control" name="name" id="trailname"/>
                    </div>
                    <div className="form-group" className="custom-file mb-3">
                        <label htmlFor="image">Choose File</label>
                        <input type="file" name="image" className="form-control-file" id="image"/>
                    </div>
                    <br/>
                    <br/>
                    <div className="form-check">
                        <input type="checkbox" name="dog_friendly" className="form-check-input" id="dog_friendly"/>
                        <label htmlFor="dog_friendly" for="dog_friendly" className="form-check-label">Dog-friendly</label>
                    </div>
                    <br/>
                    <div className="form-check">
                        <input type="checkbox" name="make_public" className="form-check-input" id="make_public"/>
                        <label htmlFor="make_public"  for="make_public" className="form-check-label">Make Public</label>
                    </div>
                    <div className="button">
                        <button type="submit" className="btn btn-primary">Edit Trail</button>
                    </div>
                    </form>
            </Layout>
        )
    }
}

module.exports = Edit;