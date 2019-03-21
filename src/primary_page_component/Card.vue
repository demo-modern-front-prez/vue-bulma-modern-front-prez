<template>
    <div class="card-content">
        <Column v-if="tabSelected === 'column'"/>
        <Grid v-if="tabSelected === 'grid'"/>
        <ProgressBar v-if="tabSelected === 'progressbar'"/>
        <IdentityCard v-if="tabSelected === 'identitycard'"/>
        <FormComponents v-if="tabSelected === 'formcomponents'"/>
        <WhitePage v-if="tabSelected === 'whitepage'"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Column from '../components/Column.vue';
    import Grid from '../components/ColumnText.vue';
    import ProgressBar from '../components/ProgressBar.vue';
    import IdentityCard from '../components/IdentityCard.vue';
    import WhitePage from '../components/WhitePage.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import FormComponents from '@/components/FormComponents.vue';
    import {EventBus} from '@/main';

    @Component({
        components: {
            FormComponents,
            WhitePage,
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
