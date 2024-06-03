const library = {
  tracks: { t01: { id: "t01", name: "Code Monkey",artist: "Jonathan Coulton", album: "Thing a Week Three" },
    t02: { id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"},
    t03: { id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },

  printPlaylists: function() {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

  printTracks: function() {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
          
    playlist.tracks.forEach(trackId => {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    });
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    if (this.tracks[trackId] && this.playlists[playlistId] && !this.playlists[playlistId].tracks.includes(trackId)) {
      this.playlists[playlistId].tracks.push(trackId);
      console.log(`Track ${trackId} added to playlist ${playlistId}`);
    }
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    const newTrackId = this.generateUid();
    this.tracks[newTrackId] = { id: newTrackId, name, artist, album };
    console.log(`Track added: ${newTrackId} - ${name} by ${artist} (${album})`);
  },

  addPlaylist: function(name, tracks = []) {
    const newPlaylistId = this.generateUid();
    this.playlists[newPlaylistId] = { id: newPlaylistId, name, tracks };
    console.log(`Playlist added: ${newPlaylistId} - ${name}`);
  }
          
               
};
library.printPlaylists();
console.log("---");

library.printTracks();
console.log("---");

library.printPlaylist("p01");
console.log("---");

library.addTrackToPlaylist("t02", "p02");
console.log(library.playlists["p02"].tracks);
console.log("---");

library.addTrack("Hours", "Jada", "January Hours");
console.log(library.tracks);
console.log("---");

library.addPlaylist("New Playlist", ["t04"]);
console.log(library.playlists);


// /////////////////////////////
// // FUNCTIONS TO IMPLEMENT:
// /////////////////////////////

// // prints a list of all playlists, in the form:
// // p01: Coding Music - 2 tracks
// // p02: Other Playlist - 1 tracks


// // prints a list of all tracks, using the following format:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function() {
//        for (const trackId in library.tracks){
//               const track = library.tracks[trackId];
//               console.log(`${track.id} - ${track.name} by ${track.artist} (${track.album})`)
//        }
// };
// printTracks();
// console.log("----")


// // prints a list of tracks for a given playlist, using the following format:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {
// const playlist = library.playlists[playlistId];
// console.log(`${playlist.id} - ${playlist.name} - ${playlist.tracks.lenght} tracks`);

// playlist.tracks.forEach(trackId => {
//        const track = library.tracks[trackId];
//        console.log(`${track.id} - ${track.name} by ${track.artist} (${track.album})`)

// });
// }
// printPlaylist("p01");
// console.log(library)


// // adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {
//        const addTrackToPlaylist = function(trackId, playlistId) {
//               if (library.tracks[trackId] && library.playlists[playlistId] && !library.playlists[playlistId].tracks.includes(trackId)) {
//                 library.playlists[playlistId].tracks.push(trackId);
//                 console.log(`Track ${trackId} added to playlist ${playlistId}`);
//               }
//             };

//             addTrackToPlaylist("t02", "p02");
//             console.log(library.playlists["p02"].tracks);
// }
// console.log("----")


// // generates a unique id
// // (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// // adds a track to the library
// const addTrack = function(name, artist, album) {
//        const newTrackId = generateUid();
//        library.tracks[newTrackId] = { id: newTrackId, name, artist, album };
//        console.log(`Track added: ${newTrackId} - ${name} by ${artist} (${album})`);
//      };

// addTrack("Hours", "Jada", "January Hours");
// console.log(library);
// console.log("----")



// // adds a playlist to the library
// const addPlaylist = function(name, tracks = []) {
//        const newPlaylistId = generateUid();
//        library.playlists[newPlaylistId] = { id: newPlaylistId, name, tracks };
//        console.log(`Playlist added: ${newPlaylistId} - ${name}`);
//      };

//  addPlaylist("New Playlist", ["t04"]);
// console.log(library);


// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// }



