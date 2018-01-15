<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details :server-info="serverInfo"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from "./components/shared/Header.vue";
    import Servers from "./components/server/Servers.vue";
    import ServerDetails from "./components/server/ServerDetails.vue";
    import Footer from "./components/shared/Footer.vue";

    export default {
        data () {
            return {
                serverInfo: 'MainApp'
            }
        },
        props: {
            header: Header
        },
        components: {
            appHeader: Header,
            Servers,
            "app-server-details": ServerDetails,
            "app-footer": Footer
        }
    };
</script>

<style>

</style>