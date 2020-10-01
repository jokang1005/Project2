const React = require("react")

class Show extends React.Component {
    
    render() {
        console.log(this.props)
        const {trails} = this.props
        return (
            <div>
                <h1>{trails.name}</h1>
            </div>
        )
    }
}

module.exports = Show