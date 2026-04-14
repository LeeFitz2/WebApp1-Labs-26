'use strict'

import logger from '../utils/logger.js';
import playlistStore from "../models/playlist-store.js";
import { v4 as uuidv4 } from 'uuid';

const dashboard = 
{
  createView(request,response)
  {
    logger.info("Dashboard is loading...");

    const viewData = 
    {
      title: "Playlist App Dashboard",
      playlists: playlistStore.getAllPlaylists()
    };

    logger.debug(viewData.playlists);

    response.render("dashboard", viewData);
  },

  addPlaylist(request, response) 
  {
<<<<<<< HEAD
    const timestamp = new Date();

=======
>>>>>>> 319e14734ea7ccebc984d21092c099888a051b76
    const newPlaylist = 
    {
      id: uuidv4(),
      title: request.body.title,
<<<<<<< HEAD
      date: timestamp,
=======
>>>>>>> 319e14734ea7ccebc984d21092c099888a051b76
      songs: [],
    };
    playlistStore.addPlaylist(newPlaylist);
    response.redirect('/dashboard');
  },

<<<<<<< HEAD
  deletePlaylist(request,response)
=======
  deletePlaylist(request, response)
>>>>>>> 319e14734ea7ccebc984d21092c099888a051b76
  {
    const playlistId = request.params.id;
    logger.debug(`Deleting Playlist ${playlistId}`);
    playlistStore.removePlaylist(playlistId);
    response.redirect("/dashboard");
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 319e14734ea7ccebc984d21092c099888a051b76
};

export default dashboard;