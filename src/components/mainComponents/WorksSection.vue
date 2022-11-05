<template>
  <section id="works" class="container py-5" :ref="'worksSection'">
    <div class="row">
      <div class="col-12 m-auto mb-3">
         <h4 class="pageStyleWordLight text-capitalize">
          Works i've done
        </h4>
      </div>
      <div class="col-12 m-auto">
        <button class="btn btn-danger" @click="$_previousSlideOnClick()">Prev</button>
        <div class="fs-5 text-center">
          {{ worksCarousel[prevWork].text }}
        </div>
        <div class="display-2 text-center" :class=" i === currentWork ? 'd-block' : 'd-none' " v-for="(work, i) in worksCarousel" :key="i">
          {{ work.text }}
        </div>
        <div class="fs-5 text-center">
          {{ worksCarousel[nextWork].text }}
        </div>
        <button class="btn btn-danger" @click="$_nextSlideOnClick()">Next</button>
      </div>
    
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorksSection',
  data(){
    return{
      prevWork: null,
      currentWork: 0,
      nextWork: 1,
      worksCarousel: [
        {
          text: '1',
        },
        {
          text: '2',
        },
        {
          text: '3',
        },
        {
          text: '4',
        },
        {
          text: '5',
        },
        {
          text: '6',
        },
        {
          text: '7',
        },
      ]
    }
  },
  methods:{
    $_nextSlideOnClick(){
      if(this.currentWork === this.worksCarousel.length - 1){
        this.currentWork = 0;
        if(this.currentWork === 0){
          this.prevWork = this.worksCarousel.length -1;
          this.nextWork = 1;
        }
      }else{
        this.currentWork++;
        this.prevWork = this.currentWork -1;
        if(this.currentWork === this.worksCarousel.length -1){
          this.nextWork = 0;
        }else{
          this.nextWork = this.currentWork + 1;
        }
        
      }
    },
    $_previousSlideOnClick(){
     if(this.currentWork === 0){
      this.currentWork = this.worksCarousel.length - 1;
      if(this.currentWork === this.worksCarousel.length - 1){
        this.prevWork = this.worksCarousel.length - 2;
        this.nextWork = 0;
      }
     }else{
      this.currentWork--;
        this.nextWork = this.currentWork +1;
      if(this.currentWork === 0){
        this.prevWork = this.worksCarousel.length -1;
      }else{
        this.prevWork = this.currentWork -1;
      }
     }
      
    },
    $_scrollSpy(){
      this.currentScrollYPosition = window.scrollY;

      let { offsetTop, offsetHeight } = this.$refs.worksSection;

      if(this.currentScrollYPosition >= offsetTop - 100 && this.currentScrollYPosition < offsetHeight + offsetTop){
        this.$emit('sectionInfos', 3);
      }
          
    },
    $_prevWorkDynamicOnCreated(){
      this.prevWork = this.worksCarousel.length -1;
    }
  },
  created() {
    this.$_prevWorkDynamicOnCreated();
    window.addEventListener('scroll', this.$_scrollSpy);
  },
  destroyed() {
    window.removeEventListener('scroll', this.$_scrollSpy);
  },
}
</script>

<style lang="scss" scoped>

</style>