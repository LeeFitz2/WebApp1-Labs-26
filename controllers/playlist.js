"use strict"

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";
import { v4 as uuidv4 } from 'uuid';

const playlist = {
    createView(request, response)
    {
        const playlistID = request.params.id;
        logger.debug(`Playlist id = ${playlistID}`);

        const viewData = {
            title: "Playlist",
            singlePlaylist: playlistStore.getPlaylist(playlistID)
        };
        response.render("playlist", viewData);
    },

    addSong(request, response)
    {
        const playlistId = request.params.id;
        const playlist = playlistStore.getPlaylist(playlistId);
        const newSong = {
            id: uuidv4(),
            title: request.body.title,
            artist: request.body.artist,
        };
        playlistStore.addSong(playlistId, newSong);
        response.redirect('/playlist/' + playlistId);
    },

<<<<<<< HEAD
    deleteSong(request, response) 
    {
        const playlistId = request.params.id;
        const songId = request.params.songid;
        logger.debug(`Deleting Song  $(songId} from Playlist ${playlistId}`);
        playlistStore.removeSong(playlistId, songId);
        response.redirect('/playlist/' + playlistId);
    },

=======
    deleteSong(request, response)
    {
        const playlistId = request.params.id;
        const songId = request.params.songid;
        logger.debug(`Deleting Song ${songId} from Playlist ${playlistId}`);
        playlistStore.removeSong(playlistId, songId);
        response.redirect('/playlist/' + playlistId);
    },
>>>>>>> 319e14734ea7ccebc984d21092c099888a051b76
};

export default playlist;