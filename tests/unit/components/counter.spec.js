import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'
describe('Counter Component', () => {
  let wrapper
  //   test('Debe de hacer match con el snapshot', () => {
  //     const wrapper = shallowMount(Counter)
  //     expect(wrapper.html()).toMatchSnapshot()
  //   })
  beforeEach(() => {
    //para hacer una limpieza
    wrapper = shallowMount(Counter)
  })
  test('h2 debe de tener el valor defecto "counter"', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy()
    const h2Value = wrapper.find('h2').text()
    expect(h2Value).toBe('Counter')
  })

  test('El valor por defecto debe de ser 100 en el p', () => {
    //wraper

    //pTagas
    const value = wrapper.find("[data-testid='counter']").text()
    // epect seundo p === 100
    // expect(pTags[1].text()).toBe('100')
    expect(value).toBe('100')
  })

  test('Debe incrementar y decrementar el valor del contador', async () => {
    //wraper

    const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')

    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const value = wrapper.find("[data-testid='counter']").text()
    expect(value).toBe('101')
  })

  test('debe de establecer el valor por defecto', () => {
    const { start } = wrapper.props()
    const value = wrapper.find("[data-testid='counter']").text()

    expect(Number(value)).toBe(start)
  })

  test('debe de mostrar la prop title', () => {
    const title = 'Hola Mundo!!!!!!'
    //porque sera una prueba aislada definimos nuestro wrapper
    //ademas aca le enviaremos los props
    //lo realizamos asi porque si no modificariamos las demas pruebas
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    })
    expect(wrapper.find('h2').text()).toBe(title)
  })
})
