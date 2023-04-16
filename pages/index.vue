<template>
  <HomeIndex />
</template>

<script setup lang="ts">
import { ILicense } from '~/types/TrackTypes'
import { provide } from 'vue'

const client = useSupabaseClient()

const { data: license, pending } = await useAsyncData(
  'license',
  async () => client.from('license').select(`*, albums (*)`).order('id'),
  {
    transform: (result) => result.data as ILicense[],
  }
)

provide('license', license)
</script>

<style lang="scss" scoped></style>
