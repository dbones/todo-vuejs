
<template>
  <span>{{ momentValue }}</span>  
</template>

<script lang="ts">
import Vue from 'vue';
import { DirectiveBinding } from 'vue/types/options';
import Component from "vue-class-component";
import moment from 'moment';


@Component({
  props: ['dateTime']
})
export default class MomentAgo extends Vue {
 
    momentValue: string = "";
    interval: any;

    beforeMount() {
        this.momentValue = moment((<any>this).dateTime).fromNow();

        this.interval = setInterval(() => {
            this.momentValue = moment((<any>this).dateTime).fromNow()
        }, 1000)
    }

    destroyed() {
        clearInterval(this.interval);
    }
}

</script>