<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import AsideComponent from '@/components/AsideComponent.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="container">
        <div class="flex">
            <div class="aside">
                <AsideComponent />
            </div>
            <HeaderComponent />
        </div>
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

.flex{
    display: flex;
}

.aside{
    min-width: 240px;
}
</style>