import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InputWrapper from '../form_inputs/InputWrapper.vue'
import { InputType } from '@/types/input_types'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Input Wrapper renders correctly', () => {
  const wrapper = mount(InputWrapper, {
    global: {
      components: { InputWrapper },
      plugins: [vuetify]
    },
    props: { ...{ label: 'Custom title', validaiton: false, inputType: InputType.Text } }
  })

  it.each('renders properly', async () => {
    expect(wrapper.find('.v-field-label--floating').exists() === true)
  })
})
