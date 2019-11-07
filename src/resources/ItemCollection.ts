import Item from "@/types/Item";

class ItemCollection {
    items!: Item[];

    constructor(items: Item[] = []){
        this.items = items
    }

    add(text: string): void {
        console.log('add');
        this.items.push({text: text})
    }

    del(index: number):void {
        console.log('del');
        this.items.splice(index,1)
    }

    list():Item[] {
        return this.items
    }
}
export default ItemCollection;