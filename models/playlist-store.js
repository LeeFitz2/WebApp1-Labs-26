"use strict";

import logger from "../utils/logger.js";
import JsonStore from "./json-store.js";

const playlistStore = {
    store: new JsonStore("./models/playlist-store.json", {playlistCollection: []}),
    collection: "playlistCollection",
    array: "songs",

    getAllPlaylists()
    {
        return this.store.findAll(this.collection);
    },

    getPlaylist(id)
    {
        return this.store.findOneBy(this.collection, (playlist => playlist.id === id));
    },

<<<<<<< HEAD
=======
    addSong(id, song)
    {
        this.store.addItem(this.collection, id, this.array, song);
    },

    removeSong(id, songId)
    {
        this.store.removeItem(this.collection, id, this.array, songId);
    },

>>>>>>> 319e14734ea7ccebc984d21092c099888a051b76
    addPlaylist(playlist)
    {
        this.store.addCollection(this.collection, playlist);
    },

    removePlaylist(id)
    {
        const playlist = this.getPlaylist(id);
        this.store.removeCollection(this.collection, playlist);
    },
<<<<<<< HEAD

    addSong(id, song)
    {
        this.store.addItem(this.collection, id, this.array, song);
    },

    removeSong(id, songId)
    {
        this.store.removeItem(this.collection, id, this.array, songId);
    },
=======
>>>>>>> 319e14734ea7ccebc984d21092c099888a051b76
};

export default playlistStore;