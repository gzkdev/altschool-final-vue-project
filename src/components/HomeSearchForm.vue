
<template>
    <div class="container">
        <div class="heading">Octomigo</div>
        <form @submit="handleSubmit" class="form">
            <input @change="handleInput" type="text">
            <button type="submit">Search</button>
        </form>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.heading {
    font-size: clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem);
    font-weight: 900;
}

.form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 40px 0;
}

.form input,
.form button {
    height: 48px;
    border: none;
    outline: none;
    font-family: inherit;
}

.form input {
    width: 100%;
    border-bottom: 2px solid currentColor;
    text-align: center;
    font-size: 24px;
}

.form button {
    background-color: #000;
    color: #fff;
    font-size: 16px;
    width: 200px;
    margin: 0 auto;
    transition: 200ms;
    border-radius: 2px;
    cursor: pointer;
}

.form button:hover {
    opacity: 0.6;
}
</style>

<script>
export default {
    data() {
        return {
            user: ""
        }
    },
    methods: {
        handleInput(e) {
            this.user = e.target.value
        },
        handleSubmit(e) {
            e.preventDefault()
            if (this.user == "") return
            this.$router.push(this.user)
        }
    }
}
</script>