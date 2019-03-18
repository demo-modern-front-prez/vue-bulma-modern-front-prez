<template>
    <div>
        <progress class="progress is-danger" value="21"max="100">70%</progress>
        <progress class="progress progress-bar" value="21"max="100">70%</progress>
        <progress class="progress info" max="100">70%</progress>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class ProgressBar extends Vue {

    }
</script>
