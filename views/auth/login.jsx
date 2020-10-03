const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <form action="/auth/login" method="POST">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" id="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" id="password"/>
          </div>
          <div className="button">
            <button type="submit" className="btn btn-primary">LOGIN</button>
          </div>
        </form>
      </Layout>
    );
  }
}

module.exports = Login;
