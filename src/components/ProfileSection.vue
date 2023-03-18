<template>
    <div class="container">
        <div class="box">
            <!-- <div class="header">
            </div> -->
            <div class="id">
                <div class="name">{{ $route.params.user }}</div>
                <a href="#" class="link">View on github</a>
            </div>
        </div>
        <div class="details">
            <div class="row">
                <div class="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-at-sign">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                </div>
                <div class="row-items">
                    <div class="title">+234 70 3964 3230</div>
                    <div class="tag">Phone</div>
                </div>
            </div>
            <div class="row">
                <div class="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-map-pin">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <div class="row-items">
                    <div class="title">+234 70 3964 3230</div>
                    <div class="tag">Location</div>
                </div>
            </div>
            <div class="row">
                <div class="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-info">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                </div>
                <div class="row-items">
                    <div class="title">+234 70 3964 3230</div>
                    <div class="tag">Phone</div>
                </div>
            </div>
            <button class="back-btn">Go back to Home</button>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> -->
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
    padding: 16px 20px;
}

.icon-box {
    font-size: 24px;
}

.back-btn {
    background-color: #000;
    color: #fff;
    width: calc(100% - 40px);
    height: 48px;
    border-radius: 4px;
    margin: 24px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
}
</style>