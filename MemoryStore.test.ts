import { MemoryStore } from "./MemoryStore";


describe("Memory Store", () => {


  it("stores memories", () => {


    const store =
      new MemoryStore();


    store.add({

      id:
        "MEM-001",

      source:
        "Intelligence Engine",

      content:
        "Knowledge supports action",

      confidence:
        0.8,

      confirmations:
        1,

      impact:
        0.7,

      createdAt:
        new Date()

    });



    expect(
      store.count()
    )
    .toBe(1);


  });



  it("retrieves memories", () => {


    const store =
      new MemoryStore();


    store.add({

      id:
        "MEM-002",

      source:
        "Test",

      content:
        "Stored experience",

      confidence:
        0.5,

      confirmations:
        1,

      impact:
        0.5,

      createdAt:
        new Date()

    });



    const memory =
      store.get("MEM-002");



    expect(
      memory?.content
    )
    .toBe(
      "Stored experience"
    );


  });


});