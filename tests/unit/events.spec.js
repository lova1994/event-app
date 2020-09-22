import { shallowMount } from '@vue/test-utils'
import Events from '@/components/Events.vue'

describe('Events.vue', () => {
  test('snapshot', () => {
      const wrapper = shallowMount(Events)
      expect(wrapper).toMatchSnapshot()
    
  })
})
