<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="container">
        <HeaderComponent />
        <div>
            <RouterView />
        </div>
    </div>
</template>
<style>
.container{
    min-width: 100vw;
    min-height: 100vh;
}
</style>