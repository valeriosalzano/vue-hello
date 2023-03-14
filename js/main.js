const { createApp } = Vue

  createApp({
    data() {
      return {
        text : 'Lorem Picsum',
        imgUrl : 'https://picsum.photos/2000/1000',
        imgAlt : 'placeholder picture'
      }
    }
  }).mount('#app');