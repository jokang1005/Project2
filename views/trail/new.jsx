const React = require("react")
const Layout = require("../layout.jsx")

class New extends React.Component {
    render() {
        return(
            <Layout>
                <h1>New Trail</h1>
                <form action="/trail/" method="post">
                    name: <input type="text" placeholder="name of trail here" name="name"/>
                    dog-friendly: <input type="checkbox" name= "dog_friendly"/>
                    <input type="submit" value="ADD TRAIL"/>

                </form>
            </Layout>
        )
    }
}

module.exports = New;