<template>
  <section id="works" class="container py-5" :ref="'worksSection'">
    <div class="row">
      <div class="col-8 m-auto mb-3">
        <h1>
          Works Section
        </h1>
      </div>
      <div class="col-8 m-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur amet, quos magni animi quasi eos fuga nihil voluptatem officia omnis deserunt voluptatibus, accusantium corporis ex iusto praesentium quisquam exercitationem!
      Debitis eius impedit laborum illum. Ex laboriosam esse adipisci laudantium voluptatem quibusdam sit aliquam nostrum nihil nobis non quod iste ducimus numquam debitis, amet perferendis magni asperiores reprehenderit, quisquam nemo.
      Praesentium autem eos sint vitae voluptatum. Magnam distinctio amet delectus, itaque libero sint? Assumenda vitae tempora iusto. Dolor quos, eius fugiat molestias enim voluptatum dignissimos dolorum, nihil voluptas quis inventore.
      Voluptate enim doloribus laboriosam quam, porro obcaecati. Nulla, quam enim! Doloremque blanditiis fuga sapiente cumque, vero velit sit illo ut quam porro debitis voluptas sint facere placeat quisquam dolor odit!
      Beatae temporibus sequi ipsa facilis ipsum voluptate rerum dolorum quae id optio eius, veritatis sapiente! Explicabo itaque, ut voluptatem unde velit cumque dolorum! Nulla dolorem, eius provident id earum voluptatum!
      Pariatur earum ex rem accusamus quisquam nemo beatae ut, cum reprehenderit ipsum, magni aliquid ad voluptas, placeat nisi tempore delectus excepturi quasi ab culpa. Laboriosam eveniet quasi nesciunt nostrum ipsam.
      Atque voluptate sapiente illo! Dolorum labore sed deserunt voluptates assumenda possimus reprehenderit? Aspernatur rem quis facere maiores sapiente, recusandae quam sit cum minus saepe labore totam perferendis culpa? Quidem, expedita.
      Repudiandae vel, unde et neque iure quibusdam sit recusandae reiciendis, laborum a maiores fuga necessitatibus nulla, maxime cum itaque nisi illum repellendus porro. Labore assumenda odio blanditiis fugiat facere iste.
      Nulla consequuntur saepe quos porro, quas suscipit fugit iusto delectus corporis, quo distinctio animi, deserunt nihil magnam veniam itaque autem placeat nostrum fuga? Nam omnis commodi itaque distinctio? Veniam, in.
      Aperiam provident odio expedita delectus doloribus quisquam? Doloribus nemo eos optio atque quis sapiente, perferendis ad possimus, expedita error numquam quas consectetur dolorum suscipit corporis, recusandae quos omnis fugiat? Non?
      Aspernatur minima cum asperiores rem eveniet officia ut, aliquid hic assumenda mollitia, et quibusdam voluptatum voluptas possimus nulla magni harum aperiam sit. Perferendis molestiae atque quasi, magni culpa sed nemo.
      Obcaecati illum delectus aliquam aut at voluptatibus pariatur est aperiam quibusdam magni labore velit nesciunt, alias, totam excepturi animi magnam suscipit odio! Officia, at provident quaerat aspernatur qui neque vero?
      Temporibus blanditiis modi veritatis beatae quam vel, velit harum aliquam debitis autem voluptas incidunt laborum eos illo voluptatem dignissimos mollitia repudiandae enim praesentium quae et quia natus sed explicabo. Repudiandae.
      Et corporis minus fuga? Blanditiis nobis autem dignissimos necessitatibus vitae iusto qui odio dicta eos dolorum eveniet, dolore nulla accusantium ad expedita. Voluptatum dolor similique laudantium minus. Commodi, enim dignissimos?
      Corrupti a perferendis, nulla quod laborum dignissimos quia quo maxime! Deleniti dolore enim, non alias dignissimos omnis neque saepe error eveniet nihil, et voluptas in, aspernatur dicta molestias tenetur odio.
      Excepturi, earum. Repudiandae rem officia, neque expedita illum pariatur harum minima laboriosam ipsa quam minus aspernatur eligendi architecto error distinctio praesentium quidem molestias possimus corrupti veniam saepe tempora debitis. Rem!
      Eos labore nam, pariatur magni esse ipsam incidunt tempore fuga sapiente animi laborum necessitatibus tempora nisi minima repellendus et deserunt. Praesentium ab provident eveniet reprehenderit. Facilis rerum quae veritatis neque.
      Quidem adipisci perferendis officiis vel natus neque quam, consequatur ut, dolores eligendi modi corporis inventore exercitationem alias unde molestiae ad mollitia! Nemo, voluptatibus provident. Tenetur ullam dignissimos quo cum et!
      Ratione cum vel recusandae illum temporibus ullam dolores nostrum consectetur, sequi ut laudantium nisi similique, nobis possimus at. Eaque vel itaque molestias ullam porro eveniet quibusdam libero, perspiciatis iusto deleniti.
      Quasi, neque. Quo sunt dolorum, rem sit corrupti consequuntur soluta quas facilis magnam sapiente cumque, at illum veritatis quibusdam harum nesciunt? Accusantium quibusdam dolore necessitatibus dolorem ex atque adipisci cumque!
      </div>
    
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorksSection',
  methods:{
    $_scrollSpy(){
      this.currentScrollYPosition = window.scrollY;

      let { offsetTop, offsetHeight } = this.$refs.worksSection;

      if(this.currentScrollYPosition >= offsetTop - 100 && this.currentScrollYPosition < offsetHeight + offsetTop){
        this.$emit('sectionInfos', 3);
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