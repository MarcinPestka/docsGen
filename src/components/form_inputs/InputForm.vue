<script setup lang="ts">
import { ref } from 'vue'
import { type NewFormInput } from '@/types/inputTypes
import { requiredRule } from '@/utils/validationRules'

const newInput = ref<NewFormInput>({ label: '', inputType: '', description: '' })
</script>

<template>
  <v-card color="surface-variant" max-width="344" title="Add new input" class="input-form">
    <v-card-text>
      <v-form>
        <v-text-field
          label="Input label"
          @update:modelValue="(v) => (newInput.label = v)"
          data-test-id="field-name-text-input"
          :required="true"
          :rules="[requiredRule(newInput.label, 'Label field is required')]"
        ></v-text-field>
        <v-text-field
          label="Description"
          @update:modelValue="(v) => (newInput.description = v)"
          data-test-id="description-text-input"
          :rules="[requiredRule(newInput.description, 'Description is required')]"
        ></v-text-field>
        <v-select
          label="Type of label"
          :items="['Text', 'Select']"
          @update:modelValue="(v) => (newInput.inputType = v!)"
          data-test-id="type-input"
          :rules="[requiredRule(newInput.inputType, 'Input type is required')]"
        ></v-select>
        <div style="display: flex; justify-content: center">
          <v-btn
            variant="tonal"
            @click="() => console.log(newInput)"
            data-test-id="button-input-form"
            >Add new form</v-btn
          >
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
