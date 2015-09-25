var React = require('react');
var Display = require('./parts/display');
var JoinSpeaker = require('./parts/joinspeaker');

var Speaker = React.createClass({
    render() {
        return (
            <div>
                <Display if={this.props.status === 'connected'}>

                    <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
                        <p>Questions</p>
                        <p>Attendance</p>
                    </Display>

                    <Display if={!this.props.member.name}>
                        <h2>Start the presentation</h2>
                        <JoinSpeaker />
                    </Display>

                </Display>
            </div>
        );
    }
});

module.exports = Speaker;