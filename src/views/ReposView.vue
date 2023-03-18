<script setup>
import ProfileSection from "../components/ProfileSection.vue";
import RepoSection from "../components/RepoSection.vue";
import UserPageLayout from "../components/UserPageLayout.vue";
</script>

<template>
  <UserPageLayout>
    <ProfileSection />
    <RepoSection />
  </UserPageLayout>
</template>
