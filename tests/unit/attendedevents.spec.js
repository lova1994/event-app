import { shallowMount, createLocalVue } from '@vue/test-utils'
import AttendedEvents from '@/views/AttendedEvents.vue'
import VueRouter from 'vue-router'


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
    path: "/attendedevents",
  };

  const wrapper = shallowMount(AttendedEvents, {
    mocks: {
      $route,
    },
    propsData: {
      single: "",
    },
  });
  expect(wrapper.vm.$route.path).toBe("/attendedevents");
});

