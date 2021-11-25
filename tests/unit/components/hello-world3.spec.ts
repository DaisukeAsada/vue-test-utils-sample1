import { mount } from '@vue/test-utils'
import HelloWorld3 from '@/components/HelloWorld3.vue'
describe('Hello World3', () => {
  it('test component', () => {
    const wrapper = mount(HelloWorld3)
    const profile = wrapper.get('#profile')
    console.log(profile.text())
    const admin = wrapper.find('#admin')
    // expect(admin.exists()).toBe(false)
    expect(admin.isVisible()).toBe(false)
  })
})
