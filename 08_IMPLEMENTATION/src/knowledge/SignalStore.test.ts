import { SignalStore } from "./SignalStore";


describe("Signal Store", () => {


  it("stores discovered signals", () => {

    const store =
      new SignalStore();


    store.add({
      id: "SIGNAL-001",
      source: "PATTERN-001",
      description: "Strong emerging signal",
      strength: 0.9,
      confidence: 0.8,
      importance: 0.9,
      createdAt: new Date()
    });


    expect(
      store.count()
    )
    .toBe(1);

  });


  it("retrieves signals by id", () => {

    const store =
      new SignalStore();


    store.add({
      id: "SIGNAL-002",
      source: "PATTERN-002",
      description: "Stored signal",
      strength: 0.7,
      confidence: 0.7,
      importance: 0.7,
      createdAt: new Date()
    });


    expect(
      store.get("SIGNAL-002")?.source
    )
    .toBe("PATTERN-002");

  });


});