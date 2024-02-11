import {Storyblok} from '../storyblock'
import getHome from '../getHome'
import serviceHome from '../../domain/content/services/serviceHome'

serviceHome.getHome = jest.fn()

afterEach(() => {
  jest.clearAllMocks()
})

describe('api success', () => {
  beforeEach(() => {
    Storyblok.get = jest.fn().mockResolvedValue(Promise.resolve({data:{
      story: {
        content: {
          body: {}
        }
      }
    }}))
  })
  
  it('gets a response', async () => {
    await getHome()
    
    expect(serviceHome.getHome).toHaveBeenCalled()
  })
})

describe('api errors', () => {
  beforeEach(() => {
    Storyblok.get = jest.fn().mockResolvedValue(Promise.reject('error'))
  })

  it('gets an error', async () => {
    try {
      await getHome()
    
      expect(serviceHome.getHome).not.toHaveBeenCalled()
    } catch (error) {
      expect(error).toStrictEqual(expect.any(String))
      expect(serviceHome.getHome).not.toHaveBeenCalled()
    }  
  })
})
