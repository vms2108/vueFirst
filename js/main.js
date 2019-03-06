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

var app7 = new Vue ({
  el: '#app7',
  data: {
    name:'Имя',
    age: 12
  },
  methods: {
    ageResult: function(){
      if (this.age > 17){
        return 'Вам 18 или больше';
      } else {
        return 'Вам меньше 18ти лет';
      }
    }
  }
})

var app8 = new Vue ({
  el: '#app8',
  data: {
    isBounded : false,
    color: 'green',
    size: 'small',
    height: 100,
    width: 100,
    bgcolor: '#030303'
  }
})