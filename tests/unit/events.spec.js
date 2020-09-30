import { mount } from '@vue/test-utils'
import Events from '@/components/Events.vue'



describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
   
    const wrapper = mount(Events, {
      propsData: {
        event: 'baz'
      }
    })
   
    expect(wrapper.props().event).toBe('baz')
    expect(wrapper.props('event')).toBe('baz')
  })
  console.log(propsData)
})

