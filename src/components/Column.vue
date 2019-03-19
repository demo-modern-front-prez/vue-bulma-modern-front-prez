<template>
    <div class="card-placement">
        <div class="card card-component">
            <div class="card-header">
                <span class="card-header-title">COLUMN</span>
            </div>
            <div class="card-content">
                <div class="column-element">
                    <div>
                        <h1>Mobile responsive</h1>
                    </div>
                    <div class="columns is-mobile content">
                        <div class="column column1">Column 1</div>
                        <div class="column column2">Column 2</div>
                        <div class="column column3">Column 3</div>
                    </div>
                </div>
                <div class="column-element">
                    <div>
                        <h1>Tablet responsive</h1>
                    </div>
                    <div class="columns is-0-tablet content">
                        <div class="column column1">Column 1</div>
                        <div class="column column2">Column 2</div>
                        <div class="column column3">Column 3</div>
                    </div>
                </div>
                <div class="column-element">
                    <div>
                        <h1>Desktop responsive</h1>
                    </div>
                    <div class="columns is-4-desktop content">
                        <div class="column column1">Column 1</div>
                        <div class="column column2">Column 2</div>
                        <div class="column column3">Column 3</div>
                    </div>
                </div>
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
    export default class Column extends Vue {
    }
</script>
