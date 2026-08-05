import { Memory } from "./Memory";


export class MemoryStore {


  private memories: Memory[] = [];



  add(
    memory: Memory
  ): Memory {

    this.memories.push(memory);

    return memory;

  }



  get(
    id: string
  ): Memory | undefined {

    return this.memories.find(
      memory =>
        memory.id === id
    );

  }



  getAll(): Memory[] {

    return this.memories;

  }



  count(): number {

    return this.memories.length;

  }


}