<template>
    <div class="container">
        <div class="box">
            <div class="heading">{{ repoData.name }}</div>
            <div>{{ repoData.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            repoData: [],
        }
    },
    methods: {
        async fetchUserGithubRepositories() {
            let USERNAME = this.$route.params.user;
            let REPO = this.$route.params.repo;
            try {
                const res = await fetch(`https://api.github.com/repos/${USERNAME}/${REPO}`)
                const data = await res.json()
                this.repoData = data
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        },
    },
    mounted() {
        this.isLoading = true
        this.fetchUserGithubRepositories()
        this.isLoading = false
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    padding: 40px 24px;
}

.box {
    width: 100%;
    max-width: 600px;
    padding: 16px 16px;
    border-radius: 4px;
    min-height: 200px;
    border: 1px solid #ebebeb;
}

.heading {
    font-size: 40px;
    font-weight: 500;
}
</style>