var playlist = {artistName: "songTitle"};

//function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) //{
// obj[key] = value
// 
//  return obj
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}