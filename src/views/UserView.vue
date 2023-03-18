<script setup>
import UserPageLayout from "../components/UserPageLayout.vue"
import ProfileSection from "../components/ProfileSection.vue"
import RepoSection from "../components/RepoSection.vue";
</script>

<template>
  <UserPageLayout>
    <ProfileSection />
    <RepoSection />
  </UserPageLayout>
</template>


<style scoped>
.profile {
  height: 100%;
  background-color: bisque;
}
</style>