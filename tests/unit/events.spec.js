// import { shallowMount, createLocalVue} from '@vue/test-utils'
// import Events from '@/components/Events.vue'
// import VueRouter from 'vue-router'


// const localVue = createLocalVue()
// localVue.use(VueRouter)

// const router = new VueRouter()

// shallowMount(Events, {
//   localVue,
//   router
// })

// // check that router path works
// test("test router", () => {
//   const $route = {
//     path: "/",
//   };

//   const wrapper = shallowMount(Events, {
//     mocks: {
//       $route,
//     },
//     propsData: {
//       single: "",
//     },
//   });
//   expect(wrapper.vm.$route.path).toBe("/");
// });