'use strict'

import logger from '../utils/logger.js';

const dashboard = 
{
  createView(request,response)
  {
    logger.info("Dashboard is loading...");

    const viewData = 
    {
      title: "Playlist App Dashboard"
    };

    response.render("dashboard", viewData);
  },
};

export default dashboard;