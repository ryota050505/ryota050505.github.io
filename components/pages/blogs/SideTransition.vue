<template>
  <div class="mb-5">
    <v-menu transition="scroll-y-transition">
      <template
        #activator="{ on: menu, attrs }"
      >
        <v-tooltip
          bottom
        >
          <template
            #activator="{ on: tooltip }"
          >
            <v-btn
              style="text-transform:none"
              v-bind="attrs"
              width="100%"
              v-on="{ ...tooltip, ...menu }"
            >
            <v-icon>{{ icon }}</v-icon>{{ displayText }}
            </v-btn>
          </template>
          <span>
            {{ toolTipText }}
          </span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="item.func(item.text)"
        >
          <v-list-item-title
            class="text-center"
          >
            {{ item.text + (item.count !== 0 ? '(' + item.count + ')': '')}}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

@Component
export default class BlogsSideTransition extends Vue {
  @Prop({ type:String, required: true })
  private displayText!: string

  @Prop({ type:String, required: true })
  private toolTipText!: string

  @Prop({ type: Array, required: true })
  private items!: Array<any>

  @Prop({ type: String })
  private icon!: string
}
</script>