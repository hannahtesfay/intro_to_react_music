import React from 'react'
import { NavBar, NotFound404 } from './components'
import { AlbumsContainer, MoreContainer } from './containers'
import { Switch, Route, Link } from 'react-router-dom';
import './styles/App.css'

// Add to your music app so that it has at least 3 routes (one of them can be "/")

// use react-router-dom's Switch, Route and Link components
// optionally use withRouter on one of your components to access the history prop

class App extends React.Component {

    state = {
        artist: 'Stevie Wonder',
        artistImg: 'https://i.pinimg.com/564x/9e/92/da/9e92da0a946769a8f08497c98016ed1d.jpg',
        artistInfo: 'Stevland Hardaway Morris (born May 13, 1950), known professionally as Stevie Wonder, is an American singer, songwriter, musician and record producer. A prominent figure in popular music during the second-half of the 20th century, Wonder is one of the most successful songwriters and musicians. A virtual one-man band, his use of synthesizers and further electronic musical instruments during the 1970s reshaped the conventions of R&B. He also helped drive the genre into the album era, crafting his LPs as cohesive, consistent socially conscious statements with complex compositions. Wonder is often hailed as a "genius", and has been credited as a pioneer and influence to musicians of various genres including rhythm and blues, pop, soul, gospel, funk and jazz.', 
        liked: 'Like',
        albums: [
            {
                id: 0,
                name: 'Stairwells',
                img: 'https://img.discogs.com/M8_QTPbchiSBRtLwcEC22kDQXM4=/fit-in/512x512/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9731141-1485479955-2464.png.jpg',
                songs: ["World in Front of Me",
                "Message from Your Heart",
                "Gone",
                "Valentine",
                "In Your Arms",
                "It's Love",
                "The One You Say Goodnight To",
                "Stars Falling Down",
                "Heart and Mind",
                "Without Me",
                "Delicate",
                "The Goldfish Song",
                "Mr. Sun"]
            },
            {
                id: 1,
                name: 'Elements',
                img: 'https://img.discogs.com/IuT_KicUNXaEobf1a8w5JP2sZuo=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5909408-1406051728-6364.jpeg.jpg',
                songs: ["Dear River",
                "The Fire",
                "My Dear",
                "Winter",
                "Oh Father",
                "Little Worrier",
                "Throw It Away",
                "Forever Blue",
                "Mary Anne",
                "Write It in the Sky",
                "My Own",
                "This Far"]
            },
            {
                id: 2,
                name: 'Living Room Sessions',
                img: 'https://m.media-amazon.com/images/I/81KvYYzTG3L._SS500_.jpg',
                songs: ["Rolling in the Deep",
                "The Call",
                "Timshel",
                "Michicant",
                "Use Somebody",
                "Firework",
                "Flightless Bird, American Mouth",
                "Heart of Life",
                "Just the Way You Are",
                "Blood Bank"]
            }
        ]
    };

    render() {
      return (
          <main>
              <div className="artistImg">
                  <a href="/"><img className="artistImg"  src={this.state.artistImg}/></a>
              </div>
              <h1 className="header"><a href="/">{this.state.artist}</a></h1>
              <p className="header">{this.state.artistInfo}</p>
              <NavBar />
              

                {/* Routes */}

                <section id="feature">
                    <Switch>
                    {/* Inline rendering */}
                    <Route exact path="/" render={() => <p></p>} />
                    {/* This way for component lifecycle */}
                    <Route path="/albums" component={AlbumsContainer} />

                    {/* This way for callback props and nested routing */}
                    <Route path="/more" component={MoreContainer} />

                    {/* This way for history.goBack */}
                    <Route component={NotFound404} />
                    </Switch>
                </section>
                




          </main>
      )
    }
  }
export default App