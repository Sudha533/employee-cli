import EmberRouter from '@ember/routing/router';
import config from 'employee-cli/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('courses'); // It adds the route name about and servers at the /courses url
});
