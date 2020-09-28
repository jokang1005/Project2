const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Tail Trails</h1>
            <a href="/auth/signup"><div>SIGNUP</div></a>
            <a href="/auth/login"><div>LOGIN</div></a>
            <a href="/auth/logout"><div>LOGOUT</div></a>
          </header>
          <main>{this.props.children}</main>
          <footer>
      
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;