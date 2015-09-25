var React = require('react');
var Link = require('react-router').Link;

var Join = React.createClass({

    join() { //ref has access to the whole name object in form
      var memberName = React.findDOMNode(this.refs.name).value;
        this.props.emit('join', {name: memberName});
    },

    render() {
        return (
            <form action="javascript:void(0)" onSubmit={this.join}>
                <label>Full Name</label>
                <input className="form-control" type="text" placeholder="enter your full name..." ref="name" required />
                <button className="btn btn-primary">Join</button>
                <Link to="/speaker">Start the presentation</Link>
            </form>
        );
    }
});

module.exports = Join;