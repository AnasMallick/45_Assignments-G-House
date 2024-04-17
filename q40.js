function makeAlbum(artist, title, track) {
    var album = {
        artist: artist,
        title: title,
        track: track
    };
    if (track) {
        album.track = track;
    }
    return album;
}
console.log(makeAlbum("Taylor Swift", "Lover"));
console.log(makeAlbum("Allama Iqbal", "Pakistan", 23));
