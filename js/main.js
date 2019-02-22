var app = new Vue({
  el: '#app',
  data: {
    message: 'Vue текст'
  }
})


// Директивы имеют префикс v- 
var app2 = new Vue ({
  el: '#app2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
})

var app3 = new Vue ({
  el: '#app3',
  data: {
    seen: true
  }
})

var app4 = new Vue ({
  el: '#app4',
  data: {
    items: [
      { text: 'Прийти на работу' },
      { text: 'Посидеть' },
      { text: '???' },
      { text: 'PROFIT' }
    ]
  }
})

var app5 = new Vue ({
  el: '#app5',
  data: {
    message: 'Переверни меня, я текст'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue ({
  el: '#app6',
  data: {
    message: 'Текст из инпута'
  }
})