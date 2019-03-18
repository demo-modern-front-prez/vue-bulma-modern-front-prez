<template>
    <div>
        <div v-for="element of line" class="columns element">

            <div class="column is-half border-right">
                Sed in lorem ac augue ornare iaculis. Maecenas sollicitudin, magna sit amet luctus volutpat, nisl justo
                suscipit tellus, id aliquet sapien dolor ut felis. Maecenas quis luctus mi. Nullam non diam mauris. Nunc
                vitae tincidunt erat. Sed vestibulum ligula nec ullamcorper bibendum. In euismod lectus quam. Nunc felis
                arcu, auctor nec odio et, cursus aliquet odio. Nunc dui tellus, laoreet a augue et, luctus finibus leo.
                Donec eu ornare arcu, ac mattis ipsum. In tincidunt eros eget eros tincidunt, et pharetra nulla
                pulvinar. Suspendisse ornare tempus mauris ut blandit. Vestibulum accumsan felis at eros varius
                hendrerit. Ut pharetra dolor ac cursus faucibus.
            </div>
            <div class="column is-one-quarter border-right">
                Sed in lorem ac augue ornare iaculis. Maecenas sollicitudin, magna sit amet luctus volutpat, nisl justo
                suscipit tellus, id aliquet sapien dolor ut felis. Maecenas quis luctus mi. Nullam non diam mauris. Nunc
                vitae tincidunt erat. Sed vestibulum ligula nec ullamcorper bibendum. In euismod lectus quam. Nunc felis
                arcu, auctor nec odio et, cursus aliquet odio. Nunc dui tellus, laoreet a augue et, luctus finibus leo.
                Donec eu ornare arcu, ac mattis ipsum. In tincidunt eros eget eros tincidunt, et pharetra nulla
                pulvinar. Suspendisse ornare tempus mauris ut blandit. Vestibulum accumsan felis at eros varius
                hendrerit. Ut pharetra dolor ac cursus faucibus.
            </div>
            <div class="column is-one-quarter border-right">
                Sed in lorem ac augue ornare iaculis. Maecenas sollicitudin, magna sit amet luctus volutpat, nisl justo
                suscipit tellus, id aliquet sapien dolor ut felis. Maecenas quis luctus mi. Nullam non diam mauris. Nunc
                vitae tincidunt erat. Sed vestibulum ligula nec ullamcorper bibendum. In euismod lectus quam. Nunc felis
                arcu, auctor nec odio et, cursus aliquet odio. Nunc dui tellus, laoreet a augue et, luctus finibus leo.
                Donec eu ornare arcu, ac mattis ipsum. In tincidunt eros eget eros tincidunt, et pharetra nulla
                pulvinar. Suspendisse ornare tempus mauris ut blandit. Vestibulum accumsan felis at eros varius
                hendrerit. Ut pharetra dolor ac cursus faucibus.
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Grid extends Vue {
        public columnNumber: number = 0;
        public lineNumber: number = 0;
        public column: number[] = [];
        public line: number[] = [];

        created() {
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
