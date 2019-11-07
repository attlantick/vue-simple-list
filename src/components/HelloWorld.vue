<template>
  <div class="hello">
    <b-container >
      <b-card-group class="text-left">
        <b-card>
          <b-card-title  class="text-right" >
            <b-button :disable="false" href="#" @click="editMode = !editMode" variant="primary">
              {{editMode ? 'List mode': 'Edit mode'}}
            </b-button>
          </b-card-title>

          <b-card-body>
            <b-form>
              <list-item  v-for="(item,index) in items.list()"
                          @del="items.del(Number(index))"
                          @change="change"
                          :disable="!editMode"
                          :index="index"
                          :key="index" :item="item"/>
              <new-item @add="add" :key="'add'"/>
            </b-form>
          </b-card-body>
        </b-card>
      </b-card-group>

    </b-container>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ListItem from "@/components/ListItem.vue";
  import ItemCollection from "@/resources/ItemCollection";
  import NewItem from "@/components/NewItem.vue";

  @Component({
    components: {NewItem, ListItem}
  })

  export default class HelloWorld extends Vue {
    items: ItemCollection = new ItemCollection();
    editMode: boolean = false;
    constructor(){
      super();
      this.items.add('first text item');
    }

    add(text: string):void {
      if (text)
        this.items.add(text)
    }

    change(index:number,text: string):void {
      this.items.change(index,text)
    }
  }
</script>

