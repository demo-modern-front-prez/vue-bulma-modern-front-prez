<template>
    <div class="card-placement">
        <div class="card card-component">
            <div class="card-image">
                <figure class="image is-3by1">
                    <img src="http://www.reelfanatics.com/wp-content/uploads/2012/11/Casino.jpg">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img src="https://media1.tenor.com/images/2b6138c8abd50d00965e784d948a88df/tenor.gif?itemid=4733491"
                                 alt="Well done">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">User</p>
                        <p class="subtitle is-6">user subname</p>
                    </div>
                </div>
            </div>
            <div class="content identitycard">
                {{lorem}}
            </div>
            <FooterCard/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Column from '@/components/Column.vue';
    import Grid from '@/components/ColumnText.vue';
    import ProgressBar from '@/components/ProgressBar.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import {EventBus} from '@/main';

    @Component({
        components: {
            FooterCard,
            Column,
            Grid,
            Card,
            ProgressBar,
        },
    })
    export default class Card extends Vue {
        private tabSelected: string = 'column';
        private havePicture: boolean = false;
        private lorem: string = '';

        private created() {
            this.onGetEvent();
            const fastLoremIpsum = require('fast-lorem-ipsum');

            this.lorem = fastLoremIpsum(200, 'w');
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

        private pictureTrue() {
            this.havePicture = true;
        }

        private pictureFalse() {
            this.havePicture = false;
        }
    }
</script>
