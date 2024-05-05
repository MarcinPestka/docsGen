import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import InputForm from '../form_inputs/InputForm.vue'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Input Form renders correctly', () => {
  const wrapper = mount(InputForm, {
    global: {
      components: { InputForm },
      plugins: [vuetify]
    }
  })

  it.each([
    [wrapper.find('[data-test-id="field-name-text-input"]').exists(), true],
    [wrapper.find('[data-test-id="description-text-input"]').exists(), true],
    [wrapper.find('[data-test-id="type-input"]').exists(), true],
    [wrapper.find('[data-test-id="button-input-form"]').exists(), true]
  ])('Renders correctly', (actual, expected) => {
    expect(actual).toBe(expected)
  })
})
