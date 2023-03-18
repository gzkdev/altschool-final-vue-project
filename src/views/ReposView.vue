<script setup>
import ProfileSection from "../components/ProfileSection.vue";
import UserPageLayout from "../components/UserPageLayout.vue";
</script>

<template>
  <UserPageLayout>
    <ProfileSection />
    <RouterView />
  </UserPageLayout>
</template>
