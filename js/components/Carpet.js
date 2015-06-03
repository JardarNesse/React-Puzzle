// view

var React = require('react');
var hiddenImage = globalStuff.imgNinjago1;

var Carpet = React.createClass({

  render: function() {

    var data = this.props.results.variants;

    var indents = [];
    for (var i = 0; i < data.length; i++) {
      indents.push(<div key={data[i].id} className={data[i].css}>{data[i].category}</div>);
    }

    return (
       <div>
          <div><img className="carpet-image" src={hiddenImage}/></div>
          <div className="carpet-position">{indents}</div>
       </div>
    );
  }

});

module.exports = Carpet;