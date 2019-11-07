<template>
  <div>
      <b-form-group description="For add press Enter button">
        <b-form-input
                v-on:keyup.13="add()"
                v-model="text"
                placeholder="Enter some text"
        ></b-form-input>
      </b-form-group>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class NewItem extends Vue {

    text: string = '';
    add(){
        this.$emit('add', this.text);
        this.text = '';
    }

  }
</script>

