const React = require("react")
const Layout = require("../layout")

class Show extends React.Component {
    
    render() {
        console.log(this.props)
        const {trails} = this.props
        return (
            <Layout>
                <h1>{trails.name}</h1>
                <div class="card" style= {{width: "18rem"}}>
                    <img src={trails.image} class="card-img-top" alt="Ozark National Forest"/>
                    <div class="card-body">
                        <h5 class="card-title">{trails.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>ß
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Edit</a>
                        <a href="#" class="card-link">Delete</a>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show