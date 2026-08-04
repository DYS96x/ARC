import { ObservationStore } from "./ObservationStore";
import { ObserverService } from "./ObserverService";
import { ObservationType } from "./ObservationType";


describe("Observation Engine", () => {

  it("creates and stores an observation", () => {

    const store = new ObservationStore();

    const observer = new ObserverService(store);


    const observation = observer.observe(
      "ARC",
      "SYSTEM ONLINE",
      ObservationType.SYSTEM
    );


    expect(observation.event)
      .toBe("SYSTEM ONLINE");


    expect(store.getAll())
      .toHaveLength(1);

  });

});