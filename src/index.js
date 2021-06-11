import React from "react";

const ReCRAPTCHA = props => {
  const { thiccness } = props;

  let unit = isNaN(thiccness) ? '' : 'px';

  const containerStyles = {
    fontSize: `${thiccness}${unit}`
  };

  let butt = String.raw`
  
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  |                                |
  |  To prove you're not a robot,  |
  |  select all images of a BUM    |
  |                                |
  |      | -\            /  /      |
  |      (_  |     |    |- ,       |
  |          |     |    |          |
  |          /          |          |
  |         /      ,     \         |
  |        |       )      )        |
  |        |      _/_   _ /        |
  |         \      |      |        |
  |          |     |      ,        |
  |                                |
  |                                |
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  `;

  return (
    <pre style={containerStyles}> { butt } </pre>
  );
};

export default ReCRAPTCHA;