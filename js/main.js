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
        return 'Уже можно';
      } else {
        return 'Еще нельзя';
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
    bgcolor: '#032323'
  },
  computed: {
    colorStyle: function() {
      return {
        'background-color': this.bgcolor
      }
    },
    sizeStyle: function() {
      return {
        height: this.height + 'px',
        width: this.width + 'px'
      }
    }
  }
})

var app9 = new Vue ({
  el: '#app9',
  data: {
    number: '',
    result: ''
  },
  watch: {
    number: function (newNumber) {
      if(newNumber > 0) {
        this.factorial(newNumber)
      }
    }
  },
  methods: {
    factorial: function(newNumber) {
      this.result = 'Идёт вычисление функционала...';
      var vm = this;
      setTimeout(function(){
        var res = 1;
        for (var i = 1; i<=newNumber; i++) {
          res = res * i;
        }
        vm.result = 'Факториал числа ' + newNumber + ' равен ' + res; 
      }, 1000);
    }
  }
})

var app10 = new Vue ({
  el: '#app10',
  data: {
    name: 'Егор'
  },
  methods: {
    setName: function(value) {
      this.name = value;
    }
  }
})

var app11 = new Vue ({
  el: '#app11',
  data: {
    title: 'Вася'
  },
  methods: {
    onClick: function() {
      app10.setName(this.title);
      // app10.name = this.title; // можно так
    }
  }
})

var app12 = new Vue ({
  el: '#app12',
  methods: {
    change: function() {
      this.$refs.header.innerText = 'Текст изменился';
    }
  }
})

var app13 = new Vue ({
  el: '#app13',
  data: {
    newPhone: '',
    price: '',
    phones: [
      {title: 'Iphone 8', price: 50000},
      {title: 'Nokia', price: 8000},
      {title: 'Sony', price: 12000},
      {title: 'Xiaomi', price: 14000},
      {title: 'Galaxy S8', price: 25000}
    ],
    current: '',
    isSorted: false
  },
  methods: {
    push: function(newPhone, price) {
      if (newPhone!='' && price !='') {
        obj = {title: newPhone, price: price};
        this.phones.push(obj);
        this.newPhone = '';
        this.price = '';
      }
    }
  },
  computed: {
    items() {
      this.current = this.phones;
      if(this.isSorted) {
        return this.current.sort(sortByPrice);
      } else {
        return this.phones;
      }
    }
  }
})

var sortByPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };

var app14 = new Vue ({
  el: '#app14',
  data: {
    login: '',
    password: '',
    date: '',
    age: 22,
    comment: ''
  }
})