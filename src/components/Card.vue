<template>
    <div class="card-content">
        <Column v-if="tabSelected === 'column'"/>
        <Grid v-if="tabSelected === 'grid'"/>
        <ProgressBar v-if="tabSelected === 'progressbar'"/>
        <IdentityCard v-if="tabSelected === 'identitycard'"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Column from '@/components/Column.vue';
    import Grid from '@/components/Grid.vue';
    import ProgressBar from '@/components/ProgressBar.vue';
    import EventBus from '../services/event-bus.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import IdentityCard from '@/components/IdentityCard.vue';

    @Component({
        components: {
            IdentityCard,
            Column,
            Grid,
            ProgressBar,
            FooterCard,
        },
    })
    export default class Card extends Vue {
        private tabSelected: string = 'column';

        private created() {
            this.onGetEvent();
        }

        private changeTab(index: string) {
            this.tabSelected = index;
            this.$forceUpdate();
        }

        private onGetEvent() {
            EventBus.$on('event-menu', (message: string) => {
                this.tabSelected = message;
                this.$forceUpdate();
            });
        }
    }
</script>
