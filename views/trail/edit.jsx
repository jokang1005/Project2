const React = require("react");
const Layout = require("../layout");

class Edit extends React.Component {
    render() {
        const {trail} = this.props;
        return(
            <Layout>
                <h1>Edit Trail</h1>
                <form action={`/trail/${trail._id}?_method=PUT`} method="post">
                    name: <input type="text" value={trail.name} placeholder="name of trail here" name="name"/>
                    dog-friendly: <input type="checkbox" name= "dog_friendly"/>
                    <input type="submit" value="ADD TRAIL"/>

                </form>
            </Layout>
        )
    }
}

module.exports = Edit;