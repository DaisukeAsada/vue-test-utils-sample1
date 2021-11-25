import { mount } from '@vue/test-utils'
import HelloWorld1 from '@/components/HelloWorld1.vue'

describe('HelloWorld1', () => {
  test('test App Conmponent1', () => {
    const wrapper = mount(HelloWorld1, {
      props: {
        msg: 'UnitTest'
      }
    })
    expect(wrapper.text()).toBe('Hello UnitTestJOHN')
  })
  test('test App Conmponent2', () => {
    const wrapper = mount(HelloWorld1, {
      props: {
        msg: 'World'
      }
    })
    expect(wrapper.text()).toBe('Hello WorldJOHN')
  })
})
