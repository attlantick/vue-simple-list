<template>
  <div class="item">
      <b-form-group>
        <b-form-input
                v-on:keyup.13="$emit('add',model.text)"
                v-on:keyup.8="$emit('del')"
                :disabled="disable"
                v-model="model.text"
        ></b-form-input>
      </b-form-group>
  </div>
</template>

<script lang="ts">
  import {Component,  Prop, Vue} from 'vue-property-decorator';
  import Item from "@/types/Item";

  @Component
  export default class ListItem extends Vue {

    @Prop() private item!: Item;
    @Prop() private disable!: boolean;

    model: Item = {text: ''};
    constructor(){
      super();
    }

    created(){
      if (this.item)
        this.model = {...this.item}
    }
  }
</script>

