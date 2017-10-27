<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" @click="setCurrentServer(server)"
                v-for="(server, key, index) in servers" :key="key">
                    <span v-for="(serverPropValue, key) in server" :key="serverPropValue.id">
                        <!-- Server: #{{ server.id }} - Status: {{ key }} -->
                        <template v-if="Number.isInteger(serverPropValue)">
                            Server #{{serverPropValue}}
                        </template>
                        <template v-else-if="key === 'status'">
                            {{key}}: {{serverPropValue}}
                        </template>
                    </span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from "../../main.js"
    export default {
        props: {
            servers: Array
        },
        methods: {
            setCurrentServer(server){
                eventBus.setCurrentServer(server);
            }
        }
        
    }
</script>

<style>

</style>