import { ARC } from "./ARC";


describe("ARC Core Runtime", () => {

  it("creates an identity, object, relationship and event", () => {

    const arc = new ARC();


    const identity =
      arc.identity.createIdentity(
        "HUMAN",
        "DYS96"
      );


    expect(identity.name)
      .toBe("DYS96");


    const object =
      arc.objects.registerObject(
        identity,
        "PERSON"
      );


    expect(object.identity.id)
      .toBe(identity.id);


    const relationship =
      arc.relationships.createRelationship(
        object.id,
        object.id,
        "CONNECTED_TO"
      );


    expect(relationship.sourceId)
      .toBe(object.id);


    arc.events.publish({

      id: crypto.randomUUID(),

      type: "IdentityCreated",

      sourceId: identity.id,

      payload: {
        name: identity.name
      },

      timestamp: new Date()

    });


    expect(
      arc.events.getEvents().length
    )
      .toBe(1);


  });

});