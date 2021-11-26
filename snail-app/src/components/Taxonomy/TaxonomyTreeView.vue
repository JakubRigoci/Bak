<template>
  <v-container>
    <v-row>
      <v-col>
        <v-treeview
          v-model="selection"
          :items="taxonomiesTree"
          hoverable
          shaped
          activatable
          color="secondary"
          @update:active="getActiveValue"   
        ></v-treeview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      selectionType: 'leaf',
      selection: [],
    //   items: [
    //     {
    //       id: 1,
    //       name: 'Root',
    //       children: [
    //         { id: 2, name: 'Child #1' },
    //         { id: 3, name: 'Child #2' },
    //         {
    //           id: 4,
    //           name: 'Child #3',
    //           children: [
    //             { id: 5, name: 'Grandchild #1' },
    //             { id: 6, name: 'Grandchild #2' },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // }),
    }),
    computed: {
        taxonomiesTree() {
            return this.$store.state.taxonomiesTreeView
        }
    },
    methods: {
        getActiveValue(value){
            this.$emit("change", value)
     }
    }
  }
</script>