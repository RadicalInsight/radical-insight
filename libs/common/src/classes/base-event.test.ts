import { BaseEvent, EventTrackMethod, EventType } from "./base-event";

import { validate } from "class-validator";

const testParams = {
  user: "630664faeec8990000000001",
  timestamp: "2022-01-01T00:00:00-05:00",
  value: 2,
  type: EventType.MOOD,
  trackMethod: EventTrackMethod.EMAIL,
  note: "note",
  createdOn: "2022-01-01T00:00:00-05:00",
  lastModifiedOn: "2022-01-01T00:00:00-05:00",
};

describe("BaseEvent", () => {
  it("passes validation for all properties", () => {
    validate(new BaseEvent(testParams)).then((result) => {
      expect(result).toBe;
    });
  });

  it.each`
    property            | value
    ${"user"}           | ${null}
    ${"timestamp"}      | ${"1 Jan 2022, 12:00:00 AM"}
    ${"value"}          | ${0}
    ${"type"}           | ${"something else"}
    ${"trackMethod"}    | ${"not a valid method"}
    ${"createdOn"}      | ${123}
    ${"lastModifiedOn"} | ${"abc"}
  `("fails validation when $property is $value", ({ property, value }) => {
    const newParams = {
      ...testParams,
      [property]: value,
    };
    validate(new BaseEvent(newParams)).then((result) => {
      console.log(result[0]);
      expect(result[0].property).toContain(property);
    });
  });
});
