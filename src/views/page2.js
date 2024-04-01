import React from 'react'

import page2 from './page2.html';
var _page2 = { __html: page2 };

const Page2 = {
  render: function() {
    return(
      <div dangerouslySetInnerHTML={_page2} />
    );
  }
}

export default Page2
