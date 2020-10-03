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
                <a href="/" className="button"><button>Home</button></a>
            </div>
            <div className="flexbox">
            {trails.map((trail) => {
            return (
                <div className="flexbox">
                    <div className="card" style={{width: '20rem'}}>
                    <img src={trail.image} className="card-img-top" alt={trail.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{trail.name}</h5>
                    <p className="card-text">{trail.detail} </p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Pet-Friendly: {`${trail.dog_friendly}`}</li>
                    <li className="list-group-item">Public: {`${trail.make_public}`}</li>
                    </ul>
                    <div className="card-body">
                    <a href={trail.location} target="_blank" className="card-link">See where this is</a>
                    <a href={`/trail/${trail._id}`} className="card-link">Details</a>
                    </div>
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