<template>
    <div class="container">
        <slot />
    </div>
</template>

<style scoped>
.container {
    display: grid;
}

@media (min-width:1000px) {
    .container {
        grid-template-columns: 320px 1fr;
        height: 100%;
    }
}
</style>