

const app = new Vue({

  el: '#app',
  data:{
    /* image: 'https://picsum.photos/640/360', */
    positionPhoto: 0,
    photos: [
      'assets/img/immagine_01.jpeg',
      'assets/img/immagine_02.jpeg',
      'assets/img/immagine_03.jpeg',
      'assets/img/immagine_04.jpeg',
      'assets/img/immagine_05.jpeg',
    ],
    timer: ''

  },
  methods:{
    nextImg(){
      this.positionPhoto++;
      if(this.positionPhoto === this.photos.length) this.positionPhoto = 0;
      //console.log(this.positionPhoto);
    },
    prevImg(){
      this.positionPhoto--;
      if(this.positionPhoto < 0) this.positionPhoto = this.photos.length - 1;
      //console.log(this.positionPhoto);
    },
    startPres(){
      setTimeout(function(){
        console.log('Ciao prss');

      }, 3000);
    }

  }

});
