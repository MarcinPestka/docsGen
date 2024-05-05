<script setup lang="ts">
import { InputType, type InputWrapperProps } from '@/types/input_types'

defineProps<InputWrapperProps>()
</script>

<template>
  <v-text-field
    :label="label"
    :required="validaiton"
    v-if="inputType === InputType.Text"
  ></v-text-field>
  <v-select
    v-if="inputType === InputType.Select"
    :label="label"
    :required="validaiton"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  ></v-select>
</template>

<style scoped></style>
