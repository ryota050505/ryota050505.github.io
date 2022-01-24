<template>
  <v-lazy
    :options="{
      threshold: 1.0
    }"
    transition="fade-transition"
    height="100%"
  >
    <v-hover
      v-slot="{ hover }"
    >
      <v-card
        nuxt
        light
        hover
        class="rounded-card d-flex flex-column"
        color="white"
        height="100%"
        width="100%"
        :ripple="{ center: true }"
        :to="blog.path"
      >
        <v-responsive
          :aspect-ratio="1"
        >
          <PagesBlogsCardImg
            :img-src="blog.imgsrc || 'nuxtjs_vuetify.png'"
          >
            <PagesBlogsCardCategory>
              {{ blog.category }}
            </PagesBlogsCardCategory>
          </PagesBlogsCardImg>
          <v-divider
          />
          <PagesBlogsCardTitle>
            {{ blog.title }}
          </PagesBlogsCardTitle>
          <MaterialsOverRayTransition
            :hover="hover"
          >
            {{ blog.description }}
          </MaterialsOverRayTransition>
        </v-responsive>
      </v-card>
    </v-hover>
  </v-lazy>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'
@Component
export default class BlogsContent extends Vue {
  @Prop({ type: Object, required: true })
  private blog!: object
}
</script>
