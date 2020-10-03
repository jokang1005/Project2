const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <div className="flexbox">
          <div className="card" style={{width: '20rem'}}>
            <img src="/trail_images/addicks/addicks1.jpg" className="card-img-top" alt="Addicks Reservoir1"/>
            <div className="card-body">
              <h5 className="card-title">Addicks Reservoir</h5>
              <p className="card-text">Beautiful place that has a hill where you can see the sun setting over a small patch of woods. Used to be a railway, but it is now restructured to be a walking path for the public. </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Dog friendly</li>
              <li className="list-group-item">Lots of mosquitos</li>
            </ul>
            <div className="card-body">
              <a href="https://goo.gl/maps/W6HVqnKT8Mx7zvcv8" className="card-link">See where this is</a>
              <a href="#" className="card-link">More Photos</a>
            </div>
          </div>

          <div className="card" style={{width: '20rem'}}>
            <img src="/trail_images/gorman_falls/gorman1.jpg" className="card-img-top" alt="Gorman Falls"/>
            <div className="card-body">
              <h5 className="card-title">Gorman Falls</h5>
              <p className="card-text">Desert-like path that leads to a hidden waterfall covered by trees. Path is a bit tricky and slippery at the end. BRING PLENTY OF WATER! </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Dog friendly</li>
              <li className="list-group-item">Bring water</li>
            </ul>
            <div className="card-body">
              <a href="https://goo.gl/maps/JGYQ3pPbwkdH3FS16" className="card-link">See where this is</a>
              <a href="#" className="card-link">More Photos</a>
            </div>
          </div>

          <div className="card" style={{width: '20rem'}}>
            <img src="/trail_images/ozark/ozark1.jpg" className="card-img-top" alt="Ozark National Forest"/>
            <div className="card-body">
              <h5 className="card-title">Ozark National Forest</h5>
              <p className="card-text">Dense forest with plenty of trails to walk through. Beautiful scenery. Would definitely recommend!</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Dog friendly</li>
              <li className="list-group-item">Lots of bugs</li>
            </ul>
            <div className="card-body">
              <a href="https://goo.gl/maps/brxBM2aecRW1o6Mv8" className="card-link">See where this is</a>
              <a href="#" className="card-link">More Photos</a>
            </div>
          </div>

          <div className="card" style={{width: '20rem'}}>
            <img src="/trail_images/terry_hershey/terry1.jpg" className="card-img-top" alt="Terry Hershey Park"/>
            <div className="card-body">
              <h5 className="card-title">Terry Hershey Park</h5>
              <p className="card-text">Beautiful park located in the Energy Corridor of Houston. 6 mile stretch of greenery. Playgrounds and outdoor workout equipment can be found along the path.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Dog friendly</li>
              <li className="list-group-item">Be wary of cyclists - they ride fast here.</li>
            </ul>
            <div className="card-body">
              <a href="https://goo.gl/maps/9bocPyza1M4ARg1fA" className="card-link">See where this is</a>
              <a href="#" className="card-link">More Photos</a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
