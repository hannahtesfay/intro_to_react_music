import React, { Component } from 'react';
import { NavBar, LikeButton } from '../components'
import '../styles/App.css'


// Class component
class AlbumsContainer extends React.Component {

    state = {
        artist: 'Kina Grannis',
        artistInfo: 'Kina Kasuya Grannis (born August 4, 1985) is an American singer-songwriter, guitarist and YouTuber. Grannis was the winner of the 2008 Doritos Crash the Super Bowl contest, earning a recording contract with Interscope Records and having her music video played during the commercials of Super Bowl XLII on February 3, 2008', 
        liked: 'Like',
        albums: [
            {
                id: 0,
                name: 'Innervisions (1973)',
                img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Steviewonder_innervisions.jpg',
                songs: ["1. Too High",
                "2. Visions",
                "3. Living for the City",
                "4. Golden Lady",
                "5. Higher Ground",
                "6. Jesus Children of America",
                "7. All in Love is Fair",
                "8. Don't You Worry 'bout a Thing",
                "9. He's Misstra Know-It-All"]
            },
            {
                id: 1,
                name: 'Songs in the Key of Life (1976)',
                img: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg',
                songs: ["1. Love's in Need of Love Today",
                "2. Have a Talk With God",
                "3. Village Ghetto Land",
                "4. Contusion",
                "5. Sir Duke",
                "6. I Wish",
                "7. Knocks Me Off My Feet",
                "8. Pastime Paradise",
                "9. Summer Soft",
                "10. Ordinary Pain",
                "11. Isn't She Lovely",
                "12. Joy Inside My Tears", "13. Black Man", "14. Ngiculela", "15. If It's Magic", "16. As", "17. Another Star"]
            },
            {
                id: 2,
                name: 'In Square Circle (1985)',
                img: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Stevie_Wonder_In_Square_Circle_CD_cover.JPG',
                songs: ["1. Part-Time Lover",
                "2. I Love You Too Much",
                "3. Whereabouts",
                "4. Stranger on the Shore of Love",
                "5. Never in Your Sun",
                "6. Spiritual Walkers",
                "7. Land of La LA",
                "8. Go Home",
                "9. Overjoyed",
                "10. It's Wrong (Apartheid)"]
            }
        ]
    };

    render() {
      return (
          <div>
              <p className = "albumTitles">
                  {/* Map a list of the album titles */}
                  {this.state.albums.map(item => {return <p key={item.id}>{item.name}</p> })}
              </p>
              <div className = "albumCovers">
                  {/* Map all the images, injecting the urls into the src attribute of img */}
                  {this.state.albums.map(item => {return <img key={item.id} src={item.img} className="albumCoverItem"/>})}
              </div>
              <div className = "likeButtons">
                <LikeButton />
                <LikeButton />
                <LikeButton />
              </div>
              <p className = "songTitles">
                  {/* Map the song titles from each album into its own p element */}
                <p className="songItem">{this.state.albums[0].songs.map(item => {return <p>{item}</p>})}</p>
                <p className="songItem">{this.state.albums[1].songs.map(item => {return <p>{item}</p>})}</p>
                <p className="songItem">{this.state.albums[2].songs.map(item => {return <p>{item}</p>})}</p>
              </p>

          </div>
      )
    }
  }
export default AlbumsContainer


