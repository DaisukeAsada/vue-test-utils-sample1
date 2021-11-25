import { mount } from '@vue/test-utils'
import HelloWorld6 from '@/components/HelloWorld6.vue'
describe('Hello World6', () => {
  it('test count up', async () => {
    const wrapper = mount(HelloWorld6)
    const input = wrapper.get('input')
    input.setValue('John Doe')
    wrapper.trigger('submit')
    const payload = wrapper.emitted('submitted')
    console.log(payload)
    expect(payload).toEqual([[{ name: 'John Doe' }]])
  })
})
