import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
class HelloMessage extends React.Component {
  render() {
    return(
      <div>Hello {this.props.name}</div>
    );

  }
}
*/

class App extends React.Component {



  render() {
    return (
      <div>
        <div className="header">
          <span className="header_searchbar">
            <input className="search-input" type="text" placeholder="Search..."></input>
            <button className="search-btn" type="submit">Search</button>
          </span>
        </div>


        <div className="body">
          <div className="intro">
            <h6 className="intro_text">Search Albums by Artist/Name</h6>
            <img className="intro_loader" alt='loader' src="loader.gif" height="20" width="20"></img>
          </div>

          <div className="results_albums">

          </div>
        </div>

      </div>

    );
  }
}



// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HelloMessage name="John" />);
root.render(<App />)
