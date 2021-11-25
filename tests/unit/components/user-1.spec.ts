import { shallowMount, mount } from '@vue/test-utils'
import User from '@/components/User.vue'

describe('User.vue', () => {
  it('mount render a child component', () => {
    const wrapper = mount(User)
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('ユーザ一覧')
  })
  it('shallowMount do not render a child component', () => {
    const wrapper = shallowMount(User)
    console.log(wrapper.html())
    expect(wrapper.html()).not.toContain('ユーザ一覧')
  })
  it('mount render a stubbed component', () => {
    const wrapper = mount(User, {
      global: {
        stubs: {
          UserList: {
            template: '<h2>Stubで置き換え</h2>'
          }
        }
      }
    })
    console.log(wrapper.html())
  })
  it('mount render a stubbed component', () => {
    const wrapper = mount(User, {
      global: {
        stubs: {
          UserList: true
        }
      }
    })
    console.log(wrapper.html())
  })
})
