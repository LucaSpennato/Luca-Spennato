<template>
  <section id="skills" class="container py-5" :ref="'skillsSection'">
    <div class="row">
      <div class="col-8 m-auto mb-3">
        <h4 class="pageStyleWordLight text-capitalize">
          my skills
        </h4>
      </div>
      <div class="col-8 m-auto">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore voluptatum impedit aperiam quo expedita porro provident assumenda magnam! Laudantium ad alias doloribus fugit, dignissimos accusamus accusantium blanditiis facere molestias.
       Ut autem exercitationem quam. Nemo necessitatibus doloribus sequi excepturi error debitis explicabo dolores veniam possimus ducimus! At consequuntur officiis facere harum maxime. Eius ipsum magnam id voluptas ducimus eaque velit!
       Pariatur possimus doloremque impedit fugit odit cupiditate temporibus minus explicabo adipisci asperiores accusantium, accusamus voluptatem, dignissimos provident nam amet delectus officiis! Doloremque ratione ipsam exercitationem. Dolorum architecto modi animi voluptates.
       Assumenda repellat iure adipisci eveniet, quod excepturi aspernatur consectetur sed nisi fugiat omnis, illo esse fuga expedita sapiente voluptas! Tempora commodi molestiae ut iusto corrupti sunt explicabo, soluta iste tenetur.
       Voluptatum fugiat, beatae optio nemo facere est amet ipsam incidunt accusamus sapiente blanditiis nobis sed quo perspiciatis, veritatis ex eligendi molestiae vel. Quod illum voluptate explicabo hic, distinctio molestias. Beatae?
       Iste rem aliquid temporibus debitis alias nesciunt veritatis autem accusantium aperiam dolores voluptatem aut maiores quia, sit facilis laborum consequuntur quos, a voluptate id delectus fugiat neque eveniet. Ut, consequuntur.
       Consequuntur perferendis vel accusantium nisi, odit officiis cum et sint porro libero nesciunt odio a illum veniam facere aliquam quaerat asperiores tempora dignissimos eum deleniti quam. Velit, qui maxime. Similique!
       Voluptatibus, tempora tempore impedit eum necessitatibus facilis dolorem corporis optio, eos reiciendis esse consectetur? Omnis praesentium deleniti culpa, ipsam illum in exercitationem assumenda quidem quis, iure blanditiis sed voluptate eveniet!
       Ea in soluta, natus est quaerat incidunt sit quia, impedit facilis quidem porro corrupti earum nulla, illo numquam nobis sequi quo quos. Veniam nesciunt, velit ducimus suscipit incidunt non aut!
       Fugiat dolor sint mollitia voluptatibus placeat blanditiis atque perferendis. Nemo quod earum voluptate enim architecto maxime rem amet voluptates harum magnam dicta atque, voluptatibus laborum, deserunt natus aperiam provident dignissimos.
       Dolores harum asperiores unde, repudiandae ut ipsa iure officia animi deleniti suscipit obcaecati maiores optio repellat atque at voluptates tempora voluptatem itaque ex dicta culpa! Quo suscipit odio vel nemo?
       Earum, corrupti ut voluptatibus temporibus, voluptatum architecto culpa ab facere molestiae illum aspernatur fugiat ipsam ratione illo id quidem et placeat quibusdam tempore dolor. Nesciunt repellendus doloremque maxime reprehenderit vel?
       Sed praesentium hic doloremque incidunt totam ipsum tempora, maiores provident quidem facilis, commodi minima, reprehenderit officia unde perferendis vitae ratione ipsam? Amet blanditiis dolore doloremque maxime, eveniet consequatur beatae? Ipsum!
       Aut neque iusto culpa quidem iure consequuntur praesentium et nobis dicta! Repellat exercitationem, nihil vel ducimus quos tempore labore explicabo repellendus molestiae maxime necessitatibus, quidem debitis modi ex, eum facilis.
       Id placeat qui voluptatum? Architecto, quidem quod nesciunt odit, dicta tempora quibusdam voluptas libero est saepe eos facere minima, nam fugit quae. Quae illum voluptatum assumenda soluta eaque odit delectus.
       Possimus aliquam nisi excepturi sunt, nulla autem libero maiores totam, odio deleniti, voluptas quia maxime laudantium itaque consectetur vel nobis? Expedita modi deleniti numquam ipsam repellat cum, quos asperiores aut!
       Magnam veniam, vitae, optio porro molestias nemo aperiam laborum cumque quod dolorem, nostrum nihil? Quia necessitatibus nemo sapiente id nulla, mollitia blanditiis! Aliquid, hic eum assumenda dolorum voluptate dolorem! Molestiae?
       Nesciunt obcaecati, dolores dicta fuga ut quas! Similique sit molestias maxime perspiciatis officia praesentium laudantium? Deleniti dignissimos, tempora vero earum voluptatum nesciunt ipsam, perferendis facere quam doloremque enim, minima necessitatibus?
       Illo, vitae aliquid, provident amet voluptate ipsum, quibusdam consequuntur nobis temporibus quasi quaerat iure facere. Dignissimos ad nobis, non ea quo voluptate ipsa excepturi, enim aspernatur magnam veritatis similique explicabo.
       Itaque, natus quas delectus enim ipsam nobis maiores sapiente ab reiciendis incidunt culpa consequuntur aperiam facilis nesciunt at tempore voluptate in. Eius, doloremque labore quae suscipit nostrum fuga corrupti non!
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'SkillsSection',
    data(){
      return{
        currentScrollYPosition: 0,
      }
    },
    methods:{
  $_scrollSpy(){
    this.currentScrollYPosition = window.scrollY;
    let { offsetTop, offsetHeight } = this.$refs.skillsSection;
        if(this.currentScrollYPosition >= offsetTop - 100 && this.currentScrollYPosition < offsetHeight + offsetTop){
          this.$emit('sectionInfos', 2);
          console.log('ciao');
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