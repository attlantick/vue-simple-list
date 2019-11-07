<template>
  <div class="hello">

    <ul>
      <list-item v-for="(item,index) in items.list()" @del="items.del(Number(index))" :disable="!editMode" :key="index" :item="item"/>
      <list-item @add="add" :key="'add'"/>
    </ul>

    <b-button :disable="false" href="#" @click="editMode = !editMode" variant="primary">
      {{editMode ? 'List': 'Edit'}}
    </b-button>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ListItem from "@/components/ListItem.vue";
  import ItemCollection from "@/resources/ItemCollection";

  @Component({
    components: {ListItem}
  })

  export default class HelloWorld extends Vue {
    items: ItemCollection = new ItemCollection();
    editMode: boolean = false;
    constructor(){
      super();
      this.items.add('first text item');
    }

    add(text: string){
      this.items.add(text)
    }
  }
</script>

