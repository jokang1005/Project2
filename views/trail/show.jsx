const React = require("react")
const Layout = require("../layout")

class Show extends React.Component {
    
    render() {
        console.log(this.props)
        const {trails} = this.props
        return (
            <Layout>
                <h1>{trails.name}</h1>
            </Layout>
        )
    }
}

module.exports = Show