<template>
    <div id="app">
        <Navbar/>
        <div class="columns">
            <div class="column is-2">
                <Menu/>
            </div>
            <div class="column">
                <Card/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Menu from '@/primary_page_component/Menu.vue';
    import Navbar from '@/primary_page_component/Navbar.vue';
    import Card from '@/primary_page_component/Card.vue';

    @Component({
        components: {
            Navbar,
            Menu,
            Card,
        },
    })
    export default class App extends Vue {
        private tabSelected: number = 1;

        public changeTab(index: number) {
            this.tabSelected = index;
            this.$forceUpdate();
        }
    }
</script>

<style lang="scss">
    @import '@/global.scss';
</style>
