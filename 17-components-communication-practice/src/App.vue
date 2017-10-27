<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details :currentServer="currentServer" :changeStatus="changeStatus"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import { eventBus } from "./main.js"
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: () => {
            return {
                currentServer: null
            };
        },
        components: {
            appHeader: Header,
            Servers,
            appServerDetails: ServerDetails,
            appFooter: Footer
        },
        methods: {
            changeStatus() {
                this.currentServer.status = this.currentServer.status === "Changed!"
                    ? this.currentServer.initialStatus : "Changed!";
            }
        },
        created() {
            eventBus.$on("setCurrentServer", (server) => {
                this.currentServer = server;
            })
        }
    }
</script>

<style>

</style>
