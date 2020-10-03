const React = require("react")
const Layout = require("../layout")

class Show extends React.Component {
    
    render() {
        console.log(this.props)
        const {trails} = this.props
        return (
            <Layout>
                <div className="flexbox">
                    <div className="card" style={{width: '50rem'}}>
                    <img src={trails.image} className="card-img-top" alt={trails.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{trails.name}</h5>
                    <p className="card-text">{trails.detail} </p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Pet-Friendly: {`${trails.dog_friendly}`}</li>
                    <li className="list-group-item">Public: {`${trails.make_public}`}</li>
                    </ul>
                    <div className="card-body">
                    <a href={trails.location} target="_blank" className="card-link">See where this is</a>
                    <a href={`/trail/${trails._id}/edit`} className="card-link">Edit</a>

                    <a href={`/trail`} className="card-link">Back to My Trails</a>
                    <form action={`/trail/${trails._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete"/>
                    </form>
                </div>
                </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show