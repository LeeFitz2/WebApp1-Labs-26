"use strict"

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";

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
};

export default playlist;