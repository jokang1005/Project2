const React = require("react")
const Layout = require("../layout")

class Show extends React.Component {
    
    render() {
        console.log(this.props)
        const {trails} = this.props
        return (
            <Layout>
                <h1>{trails.name}</h1>
                <div className="card" style= {{width: "18rem"}}>
                    <img src={trails.image} className="card-img-top" alt="Ozark National Forest"/>
                    <div className="card-body">
                        <h5 className="card-title">{trails.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <a href={`/trail/${trails._id}/edit`} className="card-link">Edit</a>
                        <form action={`/trail/${trails._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete"/>
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show