<template>
  <section id="about" class="container py-5">
    <div class="row">
      <div class="col-12 col-md-10 m-auto text-center text-md-start mb-3">
        <h4 class="pageStyleWordLight text-capitalize">
          something about me
        </h4>
      </div>
      <div class="col-12 col-md-10 m-auto">
        Quibusdam consequuntur, ex tenetur fugit iure laudantium officiis nobis quaerat eum alias? Ipsum eum doloremque natus molestias fuga accusantium! Accusantium numquam dolor excepturi velit esse officiis, facere veritatis autem animi.
        Sequi quas, maiores provident magni, velit odit quibusdam asperiores laboriosam dolor ullam exercitationem aut. Corporis accusamus deleniti, placeat ad consequuntur excepturi labore dolores quod impedit molestiae ex quas aperiam voluptate?
        Asperiores, amet tempore veniam totam at vitae rerum dolore quaerat error animi cupiditate consectetur provident dolor quis expedita. Pariatur enim explicabo vero harum a distinctio hic! Quam amet impedit cum.
        Debitis quae consequuntur sequi. Molestias doloremque accusamus, qui eaque quia voluptatum cum nostrum, soluta quis in corrupti iusto eos officiis tenetur suscipit nobis magni aut ab eligendi corporis temporibus repellat.
        Possimus assumenda expedita tenetur, quas illum nihil soluta debitis! Omnis, excepturi maiores non sapiente cupiditate consequatur veritatis tempore corporis nisi, velit ratione atque, beatae inventore hic eaque explicabo eligendi cumque?
        Tempora cupiditate, laborum non pariatur odio sint, numquam accusamus necessitatibus quos iste velit repellendus sit dolorem? Dignissimos obcaecati ut delectus asperiores nulla! Voluptas commodi ea iure beatae ipsam aspernatur. Quae?
        Delectus unde accusantium voluptatem doloremque excepturi, autem illum ullam. Officia reprehenderit deleniti corporis sapiente, sit, perferendis ullam impedit minus quam odio nam quidem mollitia? Aliquid ipsa asperiores tempora odio officiis.
        Obcaecati odio excepturi maxime, aspernatur laudantium velit quas illum quia ipsam eligendi praesentium unde doloribus fugit quos ex eum error itaque dolorum maiores assumenda minus aut at. Eius, vel quae?
        Officiis adipisci at neque quam a. Atque sed sunt ducimus quia aperiam ut, illum illo dolores expedita obcaecati enim dolorem eveniet quidem totam quasi cupiditate voluptatibus cumque placeat necessitatibus sint.
      </div>
    
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data(){
    return{
      currentScrollYPosition: 0,
    }
  },
  methods:{
    // $_scrollSpy(){
    // this.currentScrollYPosition = window.scrollY;
    // let { offsetTop, offsetHeight } = this.$refs.aboutSection;
    //     if(this.currentScrollYPosition >= offsetTop - 100 && this.currentScrollYPosition < offsetHeight + offsetTop){
    //       this.$emit('sectionInfos', 1);
    //     }
    //   },
  },

  // created() {
  //     window.addEventListener('scroll', this.$_scrollSpy);
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.$_scrollSpy);
  // },
}
</script>

<style lang="scss" scoped>


</style>