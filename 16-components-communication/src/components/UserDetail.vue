<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Change my Name</button>
    </div>
</template>

<script>
    import {
        eventBus
    } from "../main.js";

    export default {
        props: {
            myName: {
                type: String
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                let invName = this.myName.split("").reverse().join("");
                return invName;
            },
            resetName() {
                //this.myName = "Max";
                this.$emit("nameWasReset", "Max");
            }
        },
        created() {
            eventBus.$on("ageWasEdited", (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>