<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5" :key="index">
                Server #{{ index }}
            </li>

            <li v-show="extraServer !== undefined" class="list-group-item">{{ extraServer }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            extraServer: String
        }
    };
</script>

<style scoped>
    div {
        border: 1px solid blue
    }
</style>