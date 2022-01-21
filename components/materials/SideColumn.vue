<template>
  <v-col
    cols="2"
  >
    <v-sheet
      rounded="lg"
    >
      <v-list
        color="transparent"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-slot
                name="title"
              />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"/>

        <v-list-item
          v-for="(c, i) in categories"
          :key="i"
          link
          @click="searchByCategory(c)"
          >
          <v-list-item-content>
            <v-list-item-title> {{ c }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"/>

        <v-list-item
          link
          @click="clearCategoryQuery()"
        >
          <v-list-item-content>
            <v-list-item-title> Clear </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        </v-list>
    </v-sheet>
  </v-col>
</template>