'use strict';

page('/about', aboutController.render);
page('/', homeController.render);
page('/repos', reposController.render);

page();