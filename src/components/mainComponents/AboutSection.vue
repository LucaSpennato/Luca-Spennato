<template>
  <section id="about" class="container py-5" :ref="'aboutSection'">
    <div class="row">
      <div class="col-12 col-md-10 m-auto text-center text-md-start mb-3">
        <h4 class="pageStyleWordLight text-capitalize">
          something about me
        </h4>
      </div>
      <div class="col-12 col-md-10 m-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates delectus quis temporibus quo vel dolore deserunt assumenda distinctio blanditiis ut ad odio quasi aliquid atque expedita et, vero unde molestias.
        Explicabo amet at voluptatum autem, error eveniet cum vitae voluptas natus ullam quae quasi facere fugiat reiciendis. Vero dignissimos voluptatem natus eos recusandae, sequi esse eligendi, impedit distinctio soluta quos.
        Commodi expedita in consequuntur possimus dolorem, provident asperiores assumenda, eum nesciunt repudiandae nulla unde doloribus, ex aut! Laudantium deserunt magni, dolor adipisci delectus, excepturi atque perferendis soluta facilis recusandae sunt!
        Sit obcaecati nisi necessitatibus illum, provident nulla quis aut odio voluptatem consectetur explicabo consequuntur amet harum vero, hic est ipsum similique dignissimos quos? At quos minus unde reiciendis nemo illum!
        Omnis, earum nam voluptatum quae consectetur sunt dignissimos sequi illo nihil minus? Consequuntur similique nisi voluptatem rem quas dolorum ullam numquam est sapiente corrupti? Sit voluptatibus temporibus et hic quas.
        Nulla harum sint sapiente, ab at ipsa. Beatae iste fugit et expedita possimus odit fuga similique incidunt, accusantium numquam, commodi deleniti culpa. Qui excepturi impedit debitis iusto delectus asperiores. Placeat.
        Cupiditate, aspernatur sequi incidunt vero dolore labore maiores adipisci voluptates quisquam nam vel corrupti quis facilis earum architecto odit! Voluptas, iusto modi! Ad est eius quo, quia aliquid voluptates quis.
        Itaque corrupti quod sit! Dicta facere est repudiandae sint illo molestias eaque explicabo adipisci, tenetur voluptatem quas facilis dignissimos cum in ea voluptas eum doloribus iste? Sapiente ut vel rerum!
        Ex officia, saepe ratione odio, suscipit dolorum odit iusto veritatis ab temporibus voluptate quaerat minus totam placeat illo eos porro asperiores quo dolores quis, omnis itaque similique amet! Minima, amet.
        Eum animi quam ducimus! Debitis vel ex fuga dolore possimus reiciendis, vero doloribus, dicta laborum impedit unde, et exercitationem labore omnis odit? Ad velit, veniam non ea optio voluptatum minus.
        Magnam hic ex obcaecati ullam inventore animi, totam dolor alias tempore error illum doloribus facilis voluptas sint, at similique et. Quos, veritatis. Quasi est vero voluptatum accusantium iusto, commodi eum?
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
    $_scrollSpy(){
    this.currentScrollYPosition = window.scrollY;
    let { offsetTop, offsetHeight } = this.$refs.aboutSection;
        if(this.currentScrollYPosition >= offsetTop - 100 && this.currentScrollYPosition < offsetHeight + offsetTop){
          console.log('meh')
          this.$emit('sectionInfos', 1);
        }
      },
  },

  created() {
      window.addEventListener('scroll', this.$_scrollSpy);
  },
  destroyed() {
    window.removeEventListener('scroll', this.$_scrollSpy);
  },
}
</script>

<style lang="scss" scoped>


</style>