var React = require('react');

var JoinSpeaker = React.createClass({

    start() {
        var speakerName = React.findDOMNode(this.refs.name).value;
        var title = React.findDOMNode(this.refs.title).value;
        this.props.emit('start', { name: speakerName, title: title });
    },

    render() {
        return (
            <form action="javascript:void(0)" onSubmit={this.start}>
                <label>Full Name</label>
                <input className="form-control"
                       type="text"
                       placeholder="enter your full name..."
                       ref="name" required />

                <label>Presentation Title</label>
                <input className="form-control"
                       type="text" placeholder="enter a title for this presentation..."
                       ref="title"
                       required />

                <button className="btn btn-primary">Join</button>
            </form>
        );
    }
});

module.exports = JoinSpeaker;