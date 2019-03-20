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
                            <img src="https://media1.tenor.com/images/2b6138c8abd50d00965e784d948a88df/tenor.gif?itemid=4733491" alt="Well done">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">User</p>
                        <p class="subtitle is-6">user subname</p>
                    </div>
                </div>
            </div>
            <div class="content identitycard">
                <!-- TODO Idem ici pour la libraries lorem ipsum : https://www.npmjs.com/package/vue-lorem-ipsum-->
                Sed in lorem ac augue ornare iaculis. Maecenas sollicitudin, magna sit amet luctus volutpat,
                nisl justo
                suscipit tellus, id aliquet sapien dolor ut felis. Maecenas quis luctus mi. Nullam non diam
                mauris. Nunc
                vitae tincidunt erat. Sed vestibulum ligula nec ullamcorper bibendum. In euismod lectus quam.
                Nunc felis
                arcu, auctor nec odio et, cursus aliquet odio. Nunc dui tellus, laoreet a augue et, luctus
                finibus leo.
                Donec eu ornare arcu, ac mattis ipsum. In tincidunt eros eget eros tincidunt, et pharetra nulla
                pulvinar. Suspendisse ornare tempus mauris ut blandit. Vestibulum accumsan felis at eros varius
                hendrerit. Ut pharetra dolor ac cursus faucibus.
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
    import EventBus from '../services/event-bus.vue';
    import FooterCard from '@/components/FooterCard.vue';

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

        private pictureTrue() {
            this.havePicture = true;
        }

        private pictureFalse() {
            this.havePicture = false;
        }
    }
</script>
