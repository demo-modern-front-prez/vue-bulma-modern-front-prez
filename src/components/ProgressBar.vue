<template>
    <div class="card-placement">
        <div class="card card-component">
            <div class="card-header">
                <span class="card-header-title">PROGRESSBAR</span>
            </div>
            <div class="card-content">
                <progress class="progress is-danger" value="21" max="100">70%</progress>
                <progress class="progress info" max="100">70%</progress>
                <progress class="progress" :value="progression" max="100">70%</progress>
                <button class="button is-primary progressbar" v-on:click="addProgressionBar()">Up Progress Bar</button>
            </div>

            <FooterCard/>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import FooterCard from '@/components/FooterCard.vue';

    @Component({
        components: {
            FooterCard,
        },
    })
    export default class ProgressBar extends Vue {
        private progression: number = 0;

        private addProgressionBar() {

            this.progression += 25;
            if (this.progression > 100) {
                this.progression = 0;
            }
        }
    }
</script>
