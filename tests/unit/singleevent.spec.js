import { shallowMount, createLocalVue } from '@vue/test-utils'
import SingleEvent from '@/views/SingleEvent.vue'
import VueRouter from 'vue-router'
  const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

shallowMount(SingleEvent, {
  localVue,
  router
})
// check that router path works
test("test router", () => {
  const $route = {
    path: "/singleevent",
  };
  const wrapper = shallowMount(SingleEvent, {
    mocks: {
      $route,
    },
    propsData: {
      single: "",
    },
  });
  expect(wrapper.vm.$route.path).toBe("/singleevent");
});

// snapshot test
test('mount a component', () => {
    const wrapper = shallowMount (SingleEvent, {
    })
    expect(wrapper.html()).toMatchSnapshot()
    console.log(wrapper.html())
  })
