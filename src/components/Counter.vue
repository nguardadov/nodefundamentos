<template>
  <h3>Prueba</h3>
  <h2>{{ customTitle }}</h2>
  <p data-testid="counter">
    {{ counter }}
  </p>
  <p>
    {{ counter }}
    <sup>2</sup>
    = {{ squareCounter }}
  </p>

  <div class="buttons">
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      //required: true,

      validator(value) {
        //
        return value >= 0
      },
    },
  },
  data() {
    return {
      counter: this.start,
    }
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter
    },
    increase() {
      this.counter += 1
    },
    decrease() {
      this.counter -= 1
    },
  },

  //las propiedades computadas se manejan en chae
  computed: {
    squareCounter() {
      return this.counter * this.counter
    },

    customTitle() {
      return this.title || 'Counter'
    },
  },
}
</script>

<style>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: teal;
  transition: 0.3s ease-in-out;
}
</style>
