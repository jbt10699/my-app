import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




class HelloMessage extends React.Component {
  render() {
    return(
      <div>Hello {this.props.name}</div>
    );

  }
}



// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloMessage name="John" />);
