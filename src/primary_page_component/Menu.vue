<template>
    <div class="card">
        <div class="card-content">
            <aside class="menu menu-size">
                <p class="menu-label">
                    Menu Label
                </p>
                <ul class="menu-list">
                    <li><a v-bind:class="{'is-active': tableSelected==='column'}" v-on:click="emitEvent('column')">Column</a></li>
                    <li><a v-bind:class="{'is-active': tableSelected==='columnText'}" v-on:click="emitEvent('grid')">Column text</a></li>
                    <li><a v-bind:class="{'is-active': tableSelected==='progressbar'}" v-on:click="emitEvent('progressbar')">Progress Bar</a></li>
                    <li><a v-bind:class="{'is-active': tableSelected==='identitycard'}" v-on:click="emitEvent('identitycard')">Identity card</a></li>
                    <li><a v-bind:class="{'is-active': tableSelected==='whitepage'}" v-on:click="emitEvent('whitepage')">White Page</a></li>
                </ul>
                <p class="menu-label">
                    Menu Label 2
                </p>
                <ul class="menu-list">
                    <li><a>Menu List</a></li>
                    <li>
                        <a class="">SubList Title</a>
                        <ul>
                            <li><a>Sublist 1</a></li>
                            <li><a>Sublist 2</a></li>
                            <li><a>Sublist 3</a></li>
                        </ul>
                    </li>
                    <li><a>Element 1</a></li>
                    <li><a>Element 2</a></li>
                    <li><a>Element 3</a></li>
                </ul>
            </aside>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import EventBus from '../services/event-bus.vue';

    @Component
    export default class Menu extends Vue {

        private tableSelected: string = 'column';

        private created() {
            this.emitEvent(this.tableSelected);
        }

        private emitEvent(message: string) {
            EventBus.$emit('event-menu', message);
            this.tableSelected = message;
        }
    }
</script>
