<template>
    <div>
        <p>Counter is: {{ dc }}</p>
        <p>Number of clicks: {{ sc }}</p>
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    
    export default {
        computed: {
            ...mapGetters({
                dc: "counter/doubleCounter",
                sc: "counter/stringCounter"
            })
        }
    };
</script>