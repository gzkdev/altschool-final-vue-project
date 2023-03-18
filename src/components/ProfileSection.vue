<template>
    <div class="container">
        <div class="box">
            <div class="header"></div>
            <div class="id">
                <div class="name">{{ $route.params.user }}</div>
                <a href="#" class="link">View on github</a>
            </div>
        </div>
        <div class="details">
            <div class="row">
                <div class="icon-box"></div>
                <div class="row-items">
                    <div class="title"></div>
                    <div class="tag"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #ebebeb;
}

.header {
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box {
    width: 100%;
    position: relative;
    height: 320px;
    background-color: bisque;
}

.id {
    position: absolute;
    bottom: 24px;
    left: 0;
    width: 100%;
    padding: 8px 24px;
}

.name {
    font-size: 20px;
}

.link {
    text-decoration: none;
    font-size: 14px;
}

.row {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    padding: 8px 20px;
}

.icon-box {
    font-size: 24px;
}
</style>