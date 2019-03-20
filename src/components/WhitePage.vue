<template>
    <div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Column from '@/components/Column.vue';
    import Grid from '@/components/ColumnText.vue';
    import ProgressBar from '@/components/ProgressBar.vue';
    import EventBus from '../services/event-bus.vue';
    import FooterCard from '@/components/FooterCard.vue';

    @Component({
        components: {
        },
    })
    export default class Card extends Vue {
    }
</script>
