const React = require("react");

import {IoMdPaw} from "react-icons/io"

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
          <script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://www.rover.com/blog/wp-content/uploads/2020/07/view-1844110_1280-960x540.jpg" class="d-block w-100" alt="dog looking over body of water"/>
                </div>
                <div class="carousel-item">
                  <img src="https://sitmeanssit.com/dog-training-mu/san-antonio-dog-training/files/2019/04/dog-friendly-hiking-trails-san-antonio.jpg" class="d-block w-100" alt="sit means sit photo"/>
                </div>
                <div className="carousel-item">
                  <img src="https://busterandwhiskers.com/wp-content/uploads/2018/11/dog-hike.jpg" class="d-block w-100" alt="dog running"/>
                </div>
              </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          </header>
          <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a class="nav-link active" href="/auth/signup"><IoMdPaw/>SIGNUP</a>
              </li>
              <li className="nav-item">
                <a href="/auth/login" className="nav-link"><IoMdPaw/>LOGIN</a>
              </li>
              <li className="nav-item">
                <a href="/auth/logout" className="nav-link"><IoMdPaw/>LOGOUT</a>
              </li>
            </ul>
              {/* <IoMdPaw/><a href="/auth/signup">SIGNUP</a><IoMdPaw/>
              <a href="/auth/login">LOGIN</a>
              <IoMdPaw/><a href="/auth/logout">LOGOUT</a><IoMdPaw/> */}
          </nav>
          <main>{this.props.children}</main>
          <footer>
      
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;