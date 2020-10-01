const React = require("react")

class Edit extends React.Component {
    render() {
        return(
            <div>
                <form action={`/trail/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.trail.name}>
                    </input>
                </form>
            </div>
        )
    }
}

module.exports = Edit