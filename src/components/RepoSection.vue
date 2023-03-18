<template>
    <div class="container">
        <div class="heading">Public Repositories</div>
        <div><span>{{ $route.params.user }}</span> has {{ reposData.length }} public repos</div>
        <ul class="grid">
            <li class="grid-item" v-for="repo in reposData">
                <RouterLink :to="`/${repo.name}`">
                    <div>{{ repo.name }}</div>
                    <div class="row">
                        <div data-stat-count>
                            Stars
                            <span>{{ repo.stargazers_count
                            }}</span>
                        </div>
                        <div data-stat-count>
                            Forks
                            <span>{{ repo.forks_count
                            }}</span>
                        </div>
                        <div data-stat-count>
                            Watchers
                            <span>{{ repo.watchers_count
                            }}</span>
                        </div>
                    </div>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            reposData: [],
        }
    },
    methods: {
        async fetchUserGithubRepositories() {
            let USERNAME = this.$route.params.user;
            try {
                const res = await fetch(`https://api.github.com/users/${USERNAME}/repos`)
                const data = await res.json()
                this.reposData = data
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
    background-color: inherit;
    padding: 40px 24px;
}

.heading {
    font-size: 32px;
    font-weight: 900;
    text-transform: capitalize;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
    padding: 40px 0;
    gap: 24px;
    list-style: none;
}

.grid-item {
    min-height: 120px;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    padding: 16px 16px;
}

.grid-item a {
    text-decoration: none;
    color: inherit;
}

.row {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
}

.row [data-stat-count] {
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 4px;
}

.row span {
    font-size: 16px;
    font-weight: 500;
}
</style>