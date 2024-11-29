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
    min-width: 100%;
    min-height: 91vh;
}
</style>