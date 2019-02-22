import Vue from 'vue';
import * as moment from 'moment';


//does not refresh, use the Directive instead
const momentFilter = function(value: Date) {
  return (<any>moment)().from(value);
};

Vue.filter('moment', momentFilter);