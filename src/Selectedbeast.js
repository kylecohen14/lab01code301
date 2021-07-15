import React from 'react';

class SelectedBeast extends React.Component {


}

{this.props.allBeasts.map((value, idx) => (
  <HornedBeast 
    key={idx}
    index={idx}
    src={value.image_url}
    title={value.title}
    description={value.description}
    displayAsModal={this.props.displayAsModal}
  />
));
}

export default SelectedBeast;