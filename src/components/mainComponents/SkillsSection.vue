<template>
  <section id="skills" class="container py-5" :ref="'skillsSection'">
    <div class="row">
      <div class="col-8 m-auto mb-3">
        <h1>
          Skill Section
        </h1>
      </div>
      <div class="col-8 m-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas repellendus temporibus esse mollitia explicabo. Eum praesentium, labore assumenda quasi commodi quod, facilis quae veritatis facere quibusdam ipsum consectetur accusamus.
        Ea aut eius error quo fugiat, et quaerat velit cupiditate, provident fuga id explicabo dolorem at dolorum ipsam reiciendis nobis sapiente deleniti commodi! Tempore itaque at molestiae! Explicabo, sequi autem!
        Autem blanditiis nostrum minima dolorem vitae fuga quaerat soluta velit, aliquam iusto asperiores alias ipsum sed quae animi, quis nesciunt tenetur veritatis dolor in rem. Omnis voluptatem facilis velit laborum.
        Atque ex tempore voluptas, doloremque, tenetur animi fuga totam, perferendis veritatis ipsam accusamus? Ducimus unde corporis earum, fugit sed, dolor magni esse pariatur labore delectus dicta fugiat quas culpa vitae.
        Modi animi ipsum rem voluptatibus perspiciatis perferendis rerum consequatur, culpa consectetur autem laudantium sit recusandae corporis tempore nulla quaerat eum quae, est dolore non. Fuga vitae nemo veritatis architecto ratione?
        Unde numquam fugiat provident eos quibusdam eum hic. Quis, facere. Rem perspiciatis aliquam itaque explicabo dolore, quas illo commodi sed incidunt voluptas asperiores dignissimos voluptatibus eos distinctio voluptate accusantium provident!
        Dicta deserunt aperiam consequatur, sunt asperiores necessitatibus beatae ipsa quam. Maxime expedita fuga blanditiis magni. Laboriosam autem recusandae explicabo dolor esse iure rem a non aliquid neque. Praesentium, fugit perferendis?
        Neque alias dolorum, culpa nobis itaque minima est quae laborum facilis accusamus voluptatum quibusdam earum architecto, autem molestias enim provident saepe! Quia, atque vero excepturi voluptatum tempora veniam praesentium saepe.
        Amet neque voluptas necessitatibus. Perferendis quasi voluptas delectus officia error inventore dicta sed. Voluptas, consectetur qui corporis earum, possimus fugiat ab doloribus adipisci facilis cupiditate sit illum! Quidem, nemo placeat!
        Tempore itaque autem, porro odio aut exercitationem laudantium nam dignissimos sit nisi aliquid omnis architecto placeat. Dolor officiis reprehenderit qui consequuntur libero culpa eveniet? Dolor minima accusamus ipsa eum ab.
        Nisi ea praesentium quisquam porro provident iusto, obcaecati exercitationem illum! Ad qui eos quo, a repellendus eveniet error, labore, commodi tempora in doloribus. Debitis magni illo officia voluptas dolores consectetur!
        Vel, odit veniam consequatur sed itaque accusamus quos? Similique voluptatibus laudantium obcaecati iste molestias itaque iusto iure rerum impedit, delectus perferendis praesentium! Iure commodi labore explicabo quas accusamus laboriosam nisi.
        Itaque odit veritatis mollitia numquam magni iusto sequi, nobis laboriosam. Eveniet voluptate voluptatem dolorem voluptatum distinctio, quod quae error incidunt animi nesciunt quidem in, saepe officia eligendi recusandae commodi libero!
        Maiores deserunt natus culpa labore qui, corrupti aut totam nobis error rerum adipisci corporis ex praesentium perferendis nam reiciendis nulla magnam fugit explicabo illo. Optio, nihil? Iusto aut ratione nemo?
        Inventore, quae provident officia iste laboriosam, sunt quaerat quisquam nobis velit accusamus cum animi! Doloribus libero repellendus hic cupiditate fugit dicta obcaecati officiis. Nostrum minima error libero totam fugit ipsum?
        Illum vitae eum, nulla dolore praesentium rem facere aliquid quidem ipsa, minus itaque. Perferendis autem alias labore sunt est porro nisi accusantium maxime ex eius tenetur sint, odit officia nemo!
        Corrupti commodi dolorem id possimus illo eos temporibus vel. Minus maiores cum nobis ex qui, sed non iure possimus odit reiciendis necessitatibus. Itaque tempora reiciendis hic? Animi dicta distinctio porro.
        Nobis, sunt illo asperiores soluta alias repellendus repudiandae ipsum dolore? Tempora velit odio aut atque eligendi similique blanditiis consectetur, quos minus ipsam molestias, est odit qui laborum debitis, sequi accusamus!
        Quisquam aliquam culpa, voluptatibus fugiat delectus iste ratione, vitae dolorum laborum autem repellat veritatis! Magnam quasi ex at id nostrum repellendus inventore, modi quod aut tempora culpa beatae ducimus non.
        Iste error quibusdam voluptatibus sint eveniet repellendus iusto odio quae reiciendis. Esse nostrum, dolorem qui earum sed, molestiae quae modi architecto id pariatur repudiandae perferendis distinctio. A accusantium neque impedit!
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
        if(this.currentScrollYPosition >= offsetTop - 150 && this.currentScrollYPosition < offsetHeight + offsetTop){
          this.$emit('sectionInfos', 1);
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