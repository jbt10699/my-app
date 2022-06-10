import React from "react";

export default class App extends React.Component {

    /*Constructor*/
    constructor(props) {
        super(props);
        this.state = {
            albumList: [],
            term: "",
            showLoading: false,
            introText: "Search for Albums by Artist"
        }
    }


    search() {
        if (this.state.term === "") {
            alert("Please enter a search term");
        }
        else {
            console.log("Searching for ", this.state.term);
            //Show loading symbol
            this.setState({ showLoading: true })
            fetch(`https://itunes.apple.com/search?term=${this.state.term}&media=music&entity=album&attribute=artistTerm&limit=200`)
                .then((response) => response.json())
                .then((json) => {
                    this.setState({
                        albumList: json.results,
                        //change intro text
                        introText: "Found " + json.resultCount + " results for " + this.state.term,
                        //Hide loading symbol
                        showLoading: false
                    })
                }
                );
        }
    }

    checkEnter(e) {
        //Check if user presses enter on every keystroke
        this.setState({ term: e.target.value })
        if (e.key === "Enter") {
            this.search();
        }
    }

    render() {
        return (
            <div>
                {/*Header and search bar*/}
                <div className="header">
                    <span className="header_searchbar">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search..."
                            onKeyPress={(e) => {
                                this.checkEnter(e);
                            }}
                        />

                        <button
                            className="search-btn"
                            type="submit"
                            onClick={(e) => {
                                this.search();
                            }}>
                            Search
                        </button>
                    </span>
                </div>

                {/*Intro text */}
                <div className="body">
                    <div className="intro">
                        <h6 className="intro_text">{this.state.introText}</h6>
                        <img className="intro_loader" alt='loader' src="loader.gif" height="20" width="20"></img>
                        {this.state.showLoading ? <img id='loading-img' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading-gif" /> : <></>}

                    </div>
                    {/*Albums load here*/}
                    <div className="results_albums">
                        {this.state.albumList.map((album) => (
                            <div className="albums_card">
                                <img className="album_art" src={album.artworkUrl100} alt="album art" />
                                <p className="album_name">{album.collectionName}</p>
                                <p className="album_copyright">{album.copyright}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        );
    }
}