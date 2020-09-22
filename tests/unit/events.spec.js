import { shallowMount } from '@vue/test-utils'
import Events from '@/components/Events.vue'

describe('Events.vue', () => {
  test('events are being showed', () => {
      const wrapper = shallowMount(Events)
      expect(wrapper).toMatchSnapshot()

//expect events amount to be 3 


expect(wrapper)


  })
})
