import { shallowMount, createLocalVue } from '@vue/test-utils'
import AttendedEvents from '@/views/AttendedEvents.vue'
import VueRouter from 'vue-router'


//testar
describe('Home.vue', () => {
    it('renders events', () => {
      const wrapper = shallowMount(AttendedEvents)
      const div = wrapper.find('div')
      expect(div.exists()).toBe(true)
    })
  })

  // snapshot test
test('mount a component', () => {
    const wrapper = shallowMount (AttendedEvents, {
    })
    expect(wrapper.html()).toMatchSnapshot()
    console.log(wrapper.html())
  })

  const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

shallowMount(AttendedEvents, {
  localVue,
  router
})

// check that router path works
test("test router", () => {
  const $route = {
    path: "/",
  };

  const wrapper = shallowMount(AttendedEvents, {
    mocks: {
      $route,
    },
    propsData: {
      single: "",
    },
  });
  expect(wrapper.vm.$route.path).toBe("/");
});


