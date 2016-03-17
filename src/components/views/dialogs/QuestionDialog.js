/*
Copyright 2015, 2016 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var React = require("react");

module.exports = React.createClass({
    displayName: 'QuestionDialog',
    propTypes: {
        title: React.PropTypes.string,
        description: React.PropTypes.object,
        button: React.PropTypes.string,
        focus: React.PropTypes.bool,
        onFinished: React.PropTypes.func.isRequired,
    },

    getDefaultProps: function() {
        return {
            title: "",
            description: "",
            button: "OK",
            focus: true,
        };
    },

    onOk: function() {
        this.props.onFinished(true);
    },

    onCancel: function() {
        this.props.onFinished(false);
    },

    render: function() {
        return (
            <div className="mx_QuestionDialog">
                <div className="mx_Dialog_title">
                    {this.props.title}
                </div>
                <div className="mx_Dialog_content">
                    {this.props.description}
                </div>
                <div className="mx_Dialog_buttons">
                    <button onClick={this.onOk} autoFocus={this.props.focus}>
                        {this.props.button}
                    </button>

                    <button onClick={this.onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
});
