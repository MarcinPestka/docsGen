import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InputWrapper from '../form_inputs/InputWrapper.vue'
import { InputType } from '@/types/inputTypes'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Input Wrapper renders text input correctly', () => {
  const wrapper = mount(InputWrapper, {
    global: {
      components: { InputWrapper },
      plugins: [vuetify]
    },
    props: { label: 'Custom text input title', validaiton: false, inputType: InputType.Text }
  })

  it.each([
    [wrapper.find('.v-field-label--floating').text(), 'Custom text input title'],
    [wrapper.find('[data-test-id="text-input"]').exists(), true]
  ])('Renders correctly', (actual, expected) => {
    expect(actual).toBe(expected)
  })
})

describe('Input Wrapper renders select input correctly', () => {
  const wrapper = mount(InputWrapper, {
    global: {
      components: { InputWrapper },
      plugins: [vuetify]
    },
    props: { label: 'Custom select input title', validaiton: false, inputType: InputType.Select }
  })

  it.each([
    [wrapper.find('.v-field-label--floating').text(), 'Custom select input title'],
    [wrapper.find('[data-test-id="select-input"]').exists(), true]
  ])('Renders correctly', (actual, expected) => {
    expect(actual).toBe(expected)
  })
})
