<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <app-servers :extraServer='serverInfo'></app-servers>
    </div>
</template>

<script>
    import Servers from "./Servers.vue";

    export default {
        props: {
            serverInfo: String
        },
        components: {
            appServers: Servers
        }
    };
</script>

<style scoped>
    div {
        border: 1px solid red
    }
</style>