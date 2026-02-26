'use strict'

import logger from '../utils/logger.js';
import employee from '../models/employee.js';

const about = 
{
  createView(request, response)
  {

    const viewData = {
      title: "About the Playlist App.",
      employees: employee.getAppInfo()
    };

    response.render("about", viewData)
  },
};

export default about;