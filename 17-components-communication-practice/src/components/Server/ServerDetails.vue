<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="currentServer === null">Server Details are currently not updated</template>
        <template v-else>
            Server #{{ currentServer.id }} - Status: {{ currentServer.status }}
            <br>
            <button @click="changeStatus()">Change Status</button>
        </template>
    </div>

</template>

<script>
    export default {
        props: {
            currentServer: Object,
            changeStatus: Function
        }
    }
</script>

<style>

</style>
