'use strict'

import logger from '../utils/logger.js';

const start = 
{
  createView(request, response)
  {
    logger.info('Start page Loading...');
    response.send("Welcome to Lee's Playlist App!");
  },
};

export default start;