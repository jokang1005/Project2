const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <div className="card" style={{width: '18rem'}}>
          <img src="./images/addicks/addicks1.jpg" className="card-img-top" alt="Addicks Reservoir1"/>
          <div className="card-body">
            <h5 className="card-title">Addicks Reservoir</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>ß
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
