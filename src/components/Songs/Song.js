
const Song = (props) => {

    const voteForSong = () => {
        props.vote();
    }
    return(
        <li>{props.song.title} by {props.song.artist}. votes :{props.song.votes} <button onClick={voteForSong}>vote</button></li>
    )
}

export default Song;    