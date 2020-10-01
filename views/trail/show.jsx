const React = require("react")

class Show extends React.Component {
    
    render() {
        console.log(this.props)
        const {trails} = this.props
        return (
            <div>
                <h1>{trails.name}</h1>
                <a href="/trail/:id/edit"><button>EDIT</button></a>
            </div>
        )
    }
}

module.exports = Show