<template>
    <div class="card-placement">
        <div class="card card-component">
            <div class="card-header">
                <span class="card-header-title">GRID</span>
            </div>
            <div class="card-content">
                <div v-for="element of line" class="columns element">

                    <div class="column is-half border-right">
                       {{lorem}}
                    </div>
                    <div class="column is-one-quarter border-right">
                        {{lorem}}
                    </div>
                    <div class="column is-one-quarter border-right">
                        {{lorem}}
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
    export default class Grid extends Vue {
        private columnNumber: number = 0;
        private lineNumber: number = 0;
        private column: number[] = [];
        private line: number[] = [];
        private lorem: string = '';

        private created() {
            const fastLoremIpsum = require('fast-lorem-ipsum');

            this.lorem = fastLoremIpsum(200, 'w');

            this.columnNumber = 5;
            this.lineNumber = 1;

            for (let i = 0; i < this.columnNumber; i++) {
                this.column[i] = 0;
            }

            for (let i = 0; i < this.lineNumber; i++) {
                this.line[i] = 0;
            }
        }
    }
</script>
