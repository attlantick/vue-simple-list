<template>
  <div class="item">
      <b-form-group
              :description="description"
      >
        <b-form-input
                v-on:keyup.13="index!==undefined ? $emit('change',index,model.text) : $emit('add',model.text)"
                v-on:keyup.8="model.text ? '' : $emit('del')"
                :disabled="disable"
                v-model="model.text"
        ></b-form-input>
      </b-form-group>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
  import Item from "@/types/Item";

  @Component
  export default class ListItem extends Vue {

    @Prop() private item!: Item;
    @Prop() private index!: Number;
    @Prop() private disable!: boolean;

    model: Item = {text: ''};
    constructor(){
      super();
    }

    created() {
      if (this.item)
        this.model = {...this.item}
    }

    get description() {
        if (this.item&&(this.model.text !== this.item.text))
          return this.disable? '' : 'For save press Enter button';
        if (!this.item&&this.model.text)
            return 'For save press Enter button';
        return ''

    }

    @Watch('item.text')
    onPropertyChanged(value: string) {
      this.model.text = value
    }
  }
</script>

