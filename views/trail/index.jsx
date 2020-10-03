const React = require ("react")
const Trail = require("../../models/trail/index.js")
const Layout = require ("../layout.jsx")

class Index extends React.Component {
    render() {
        const {trails} = this.props
        return (
            <Layout title="My Trails">
            <h1>My Trails</h1>
            <div className="button">
                <a href="/trail/new" className="button"><button>Add Trail</button></a>
            </div>
            <div className="flexbox">
            {trails.map((trail) => {
            return (
                <div className="card" style={{width: '18rem'}}>
                <img src={trail.image} className="card-img-top" alt="Addicks Reservoir1"/>
                <div className="card-body">
                  <h5 className="card-title">{trail.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{trail.dog_friendly}</li>
                </ul>
                <div className="card-body">
                  <a href={`/trail/${trail._id}`} className="card-link">DETAILS</a>
                </div>
              </div>
            )}
            )}
            </div>
            </Layout>
        )
    }
}

module.exports = Index