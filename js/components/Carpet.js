// view

var React = require('react');
var Actions = require('../actions/actions');

var Carpet = React.createClass({

  render: function() {

    var data = this.props.results;

    var indents = [];
    for (var i = 0; i < data.length; i++) {
      indents.push(<div key={data[i].id} className={data[i].css}>{data[i].category}</div>);
    }

    return (
       <div className="carpet-position">
        {indents}
       </div>
    );
  }

});

module.exports = Carpet;