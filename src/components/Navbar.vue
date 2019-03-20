<template>
    <div>
        <nav class="navbar is-link" role="navigation">
            <a class="navbar-item">
                Bulma navbar
            </a>
            <a class="navbar-link">
                Home
            </a>
            <a class="navbar-link">
                Element 1
            </a>
        </nav>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Navbar extends Vue {
    }
</script>
