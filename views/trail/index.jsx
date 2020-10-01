const React = require ("react")
const Trail = require("../../models/trail/index.js")
const Layout = require ("../layout.jsx")

class Index extends React.Component {
    render() {
        const {trails} = this.props
        return (
            <Layout title="My Trails">
            <h1>My Trails</h1>
            <a href="/trail/new"><button>Add Trail</button></a>
            {trails.map((trail) => {
            return (
                <div>
                    <h2>{trail.name}</h2>
                    <a href={`/trail/${trail._id}`}><button>DETAILS</button></a>
                </div>
            )}
            )}
            </Layout>
        )
    }
}

module.exports = Index