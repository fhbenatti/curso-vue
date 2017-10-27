<template>
    <app-server-list :servers="servers"></app-server-list>
</template>

<script>
    import ServerList from "./ServerList.vue";

    export default {
        data: () => {
            return {
                servers: [{
                        id: 1,
                        status: "Normal",
                        initialStatus: "Normal"
                    },
                    {
                        id: 2,
                        status: "Critical",
                        initialStatus: "Critical"
                    },
                    {
                        id: 3,
                        status: "Unknown",
                        initialStatus: "Unknown"
                    },
                    {
                        id: 4,
                        status: "Fast",
                        initialStatus: "Fast"
                    }
                ]
            };
        },
        components: {
            appServerList: ServerList
        }
    };
</script>

<style>

</style>