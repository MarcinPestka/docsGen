<script setup lang="ts">
import { InputType, type InputWrapperProps } from '@/types/input_types'

defineProps<InputWrapperProps>()
</script>

<template>
  <v-text-field
    :label="label"
    :required="validaiton"
    v-if="inputType === InputType.Text"
    data-test-id="text-input"
  ></v-text-field>
  <v-select
    v-if="inputType === InputType.Select"
    :label="label"
    :required="validaiton"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    data-test-id="select-input"
  ></v-select>
</template>

<style scoped></style>
