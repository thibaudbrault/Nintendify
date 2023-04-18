<template>
  <HomeIndex />
</template>

<script setup lang="ts">
import type { Database } from '~/types/schema'
import { provide } from 'vue'

const client = useSupabaseClient<Database>()

const { data: license, pending } = await useAsyncData(
  'license',
  async () => client.from('license').select(`*, albums (*)`).order('id'),
  {
    transform: (result) => result.data,
  }
)

provide('license', license)
</script>

<style lang="scss" scoped></style>
