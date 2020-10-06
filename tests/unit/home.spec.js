import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import VueRouter from 'vue-router'


//kolla att komponenten funkar
describe('Home.vue', () => {
    it('renders events', () => {
      const msg = ''
      const wrapper = shallowMount(Home,  {
        propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
    })
  })

  const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

shallowMount(Home, {
  localVue,
  router
})

// check that router path works
test("test router", () => {
  const $route = {
    path: "/",
  };

  const wrapper = shallowMount(Home, {
    mocks: {
      $route,
    },
    propsData: {
      single: "",
    },
  });
  expect(wrapper.vm.$route.path).toBe("/");
});

// snapshot test
test('mount a component', () => {
  const wrapper = shallowMount (Home, {
  })
  expect(wrapper.html()).toMatchSnapshot()
  console.log(wrapper.html())
})
