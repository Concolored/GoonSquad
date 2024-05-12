Vue.component('modal', {
    template: `
        <div class="modal">
          <div class="modal-background" @click="$emit('close')"></div>
          <div class="box">
            <div class="modal-content">
              <slot></slot>
          </div>
        </div>
      </div>
      `
    });

    Vue.prototype.$logoWidthDefault = 82;

new Vue ({
  el: '#app',
  data: {
    currentVideo:"",
    videos,
    showModal:false,
  },
  methods: {
   randomVideo() {
     this.currentVideo =  this.videos[Math.floor(Math.random() * this.videos.length)]
   },
   openLogo(){
    var newWidth = this.$logoWidthDefault;
    const parent = this.$refs.iconos;
    Array.prototype.forEach.call(parent.children, child => {
      newWidth += 60;
    });
    this.$refs.logobox.style.width = newWidth + "px";
   },
   closeLogo(){
    this.$refs.logobox.style.width = this.$logoWidthDefault + "px";
   }
  },
  mounted() {
    this.randomVideo()
  }
})
