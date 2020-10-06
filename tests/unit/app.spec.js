import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import VueRouter from 'vue-router'


describe('App.vue', () => {
    it('renders props.msg when passed', () => {
      const msg = ''
      const wrapper = shallowMount(App,  {
        propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
    })
  })


  const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

shallowMount(App, {
  localVue,
  router
})