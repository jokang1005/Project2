const React = require("react")

class Edit extends React.Component {
    render() {
        const {trail} = this.props;
        return(
            <div>
                <h1>Edit Trail</h1>
                <form action={`/trail/${trail._id}?_method=PUT`} method="post">
                    name: <input type="text" value={trail.name} placeholder="name of trail here" name="name"/>
                    dog-friendly: <input type="checkbox" name= "dog_friendly"/>
                    <input type="submit" value="ADD TRAIL"/>

                </form>
            </div>
        )
    }
}

module.exports = Edit;