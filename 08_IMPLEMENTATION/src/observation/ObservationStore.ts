import { Observation } from "./Observation";

export class ObservationStore {

  private observations: Observation[] = [];

  add(observation: Observation): void {
    this.observations.push(observation);
  }


  getAll(): Observation[] {
    return this.observations;
  }


  find(id: string): Observation | undefined {
    return this.observations.find(
      observation => observation.id === id
    );
  }


  clear(): void {
    this.observations = [];
  }
}