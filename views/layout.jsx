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
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
          <script src="/js/app.js" defer></script>
        </head>
        <body>
          <header>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="overlay-image0" style={{backgroundImage: 'url("/css/images/dog4.jpg")'}}></div>
                  <div className="container">
                    <h1>Tail Trails</h1>
                  </div>
                </div>
                <div class="carousel-item" id="photo1">
                  <div className="overlay-image1" style={{backgroundImage: 'url("/css/images/dog1.jpg")'}}></div>
                  <div className="container">
                    <h1>Adventure Awaits</h1>
                  </div>
                </div>
                <div className="carousel-item" id="photo2">
                  <div className="overlay-image2" style={{backgroundImage: 'url("/css/images/dog7.jpg")'}}></div>
                  <div className="container">
                    <h1>Tail Trails</h1>
                  </div>
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
              {/* <h1>Tail Trails</h1> */}
          </header>
          <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a class="nav-link" href="/auth/signup"><IoMdPaw/>SIGNUP</a>
              </li>
              <li className="nav-item">
                <a href="/auth/login" className="nav-link"><IoMdPaw/>LOGIN</a>
              </li>
              <li className="nav-item">
                <a href="/auth/logout" className="nav-link"><IoMdPaw/>LOGOUT</a>
              </li>
              <li class="nav-item">
                <a href="#" className="nav-link disabled" tabindex="-1" area-disabled="true">Disabled</a>
              </li>
            </ul>
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