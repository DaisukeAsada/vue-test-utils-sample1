import { mount, flushPromises } from '@vue/test-utils'
import User from '@/components/User.vue'
import axios from 'axios'

jest.mock('axios')

describe('User.vue', () => {
  const users: { id: number; name: string; }[] = [
    { id: 1, name: 'aaa aaa' },
    { id: 2, name: 'bbb bbb' }
  ]
  const response: { data: { id: number; name: string; }[]; } = { data: users }
  const m = axios.get as jest.Mock
  m.mockResolvedValueOnce(response)
  // m.mockImplementationOnce(() => Promise.resolve(response))

  it('mount render a child cimponent', async () => {
    const wrapper = mount(User)
    await flushPromises()
    console.log(wrapper.html())

    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')

    const lis = wrapper.findAll('li')
    expect(lis).toHaveLength(2)
    expect(lis[0].text()).toBe(users[0].name)
    expect(lis[1].text()).toBe(users[1].name)
  })
})
