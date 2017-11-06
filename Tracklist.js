import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track.js';


class Tracklist extends React.Component {
  render(){
    return (
      <div className="TrackList">
      {this.props.tracks && this.props.tracks.map((track, i) => {
              return <Track onAdd={this.props.onAdd(this.props.track)}
              onRemove={this.props.onRemove(this.props.track)}
              key={'id'+i} track={track}
              name={this.props.track.name} artist={this.props.track.artist}
              album={this.props.track.artist}/>
              })
            }
      </div>
    );
  }
}

export default Tracklist;
