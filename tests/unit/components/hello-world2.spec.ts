import { mount } from '@vue/test-utils'
import HelloWorld2 from '@/components/HelloWorld2.vue'
describe('Hello World2', () => {
  it('test component', () => {
    const wrapper = mount(HelloWorld2)
    const profile = wrapper.get('#profile')
    console.log(profile.text())
    const admin = wrapper.find('#admin')
    expect(admin.exists()).toBe(false)
  })
  it('test component2', () => {
    const wrapper = mount(HelloWorld2, {
      props: {
        admin: true
      }
    })
    const admin = wrapper.find('#admin')
    expect(admin.exists()).toBe(true)
  })
})
