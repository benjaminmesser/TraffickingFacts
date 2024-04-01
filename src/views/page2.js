import React from 'react'

var __html = require('./page2.html');
var page2 = { __html: __html };

React.module.exports = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={page2} />
    );
  }
});
