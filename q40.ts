function makeAlbum(artist: string, title: string, track?: number): object {
  const album = {
    artist: artist,
    title: title,
    track: track,
  };
  if (track) {
    album.track = track;
  }
  return album;
}
console.log(makeAlbum("Taylor Swift", "Lover"));
console.log(makeAlbum("Allama Iqbal", "Pakistan", 23));
