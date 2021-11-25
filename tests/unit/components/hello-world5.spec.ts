import { mount } from '@vue/test-utils'
import HelloWorld5 from '@/components/HelloWorld5.vue'
describe('Hello World5', () => {
  it('test count up', async () => {
    const wrapper = mount(HelloWorld5)
    wrapper.get('button').trigger('click')
    wrapper.get('button').trigger('click')
    const payload = wrapper.emitted('incrementCount')
    console.log(payload)
    expect(payload).toEqual([[1, 'test'], [2, 'test']])
  })
})
