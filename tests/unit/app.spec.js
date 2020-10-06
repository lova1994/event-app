import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
    it('renders props.msg when passed', () => {
      const msg = ''
      const wrapper = shallowMount(App,  {
        propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
    })
  })
