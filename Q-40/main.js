function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//callig three function with different values
var album1 = make_album("Maham", " Artist title 1");
var album2 = make_album("Aiman", " Artist title 2", 7);
var album3 = make_album("Hania", " Artist title 3");
console.log(album1);
console.log(album2);
console.log(album3);
