<template>
    <div class="card-placement">
        <div class="card card-component">
            <div class="card-header">
                <span class="card-header-title">{{tabSelected.toLocaleUpperCase()}}</span>
            </div>
            <div class="card-content">
                <Column v-if="tabSelected === 'column'"/>
                <Grid v-if="tabSelected === 'grid'"/>
                <ProgressBar v-if="tabSelected === 'progressbar'"/>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">MY BIGGGG FOOOOTTTTEEERRR <span class="purple-beauty"><3</span></a>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Column from "@/components/Column.vue";
    import Grid from "@/components/Grid.vue";
    import ProgressBar from "@/components/ProgressBar.vue";
    import EventBus from "../services/event-bus.vue";

    @Component({
        components: {
            Column,
            Grid,
            ProgressBar
        },
    })
    export default class Card extends Vue {
        private tabSelected: string = "column";

        private created() {
            this.onGetEvent();
        }

        public changeTab(index: string) {
            this.tabSelected = index;
            this.$forceUpdate();
        }

        public onGetEvent() {
            EventBus.$on("event-menu", (message: string) => {
                this.tabSelected = message;
                this.$forceUpdate();
            });
        }
    }
</script>
