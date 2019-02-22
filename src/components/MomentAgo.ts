import Vue, { DirectiveOptions, VNode } from 'vue';
import * as moment from 'moment';
import { DirectiveBinding } from 'vue/types/options';

/**
 * <span v-moment-ago="item.dateTime"></span>
 */
class MomentAgo implements DirectiveOptions {
  interval: any;

  bind = <DirectiveFunction>(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) => {
    el.innerHTML = (<any>moment)(binding.value).fromNow();

    this.interval = setInterval(() => {
      el.innerHTML = (<any>moment)(binding.value).fromNow()
    }, 1000)
  }

  unbind = <DirectiveFunction>(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) => {
    clearInterval(this.interval);
  }
}


Vue.directive('moment-ago', new MomentAgo());