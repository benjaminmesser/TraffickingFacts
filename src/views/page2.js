import React from 'react'

var _html = require('./page2.html');
var _page2 = { __html: _html };

const Page2 = {
  render: function() {
    return(
      <div dangerouslySetInnerHTML={_page2} />
    );
  }
}

export default Page2
