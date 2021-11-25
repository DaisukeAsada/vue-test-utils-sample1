import { mount, VueWrapper } from '@vue/test-utils'
import HelloWorld4 from '@/components/HelloWorld4.vue'
describe('Hello World4', () => {
  // const wrapper = mount(HelloWorld4)
  let wrapper: VueWrapper<any>
  beforeEach(() => {
    wrapper = mount(HelloWorld4)
  })
  it('test component', async () => {
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
  it('test component', async () => {
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})
