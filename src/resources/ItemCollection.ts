import Item from "@/types/Item";

class ItemCollection {
    items!: Item[];

    constructor(items: Item[] = []){
        this.items = items
    }

    add(text: string): void {
        this.items.push({text: text})
    }

    change(index:number, text: string): void {
        console.log(index,text);
        this.items[index].text = text;
    }

    del(index: number):void {
        this.items.splice(index,1)
    }

    list():Item[] {
        return this.items
    }
}
export default ItemCollection;