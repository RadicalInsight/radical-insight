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

describe("BaseEvent constructor", () => {
  it("passes validation for all properties", () => {
    validate(new BaseEvent(testParams)).then((result) => {
      expect(result).toHaveLength(0);
    });
  });

  it("passes validation when missing optional `note` prop", () => {
    const newParams = {
      ...testParams,
      note: undefined,
    };
    validate(new BaseEvent(newParams)).then((result) => {
      expect(result).toHaveLength(0);
    });
  });

  it.each([
    "user",
    "timestamp",
    "value",
    "type",
    "trackMethod",
    "createdOn",
    "lastModifiedOn",
  ])("fails validation when missing required `%s` prop", (property) => {
    const newParams = {
      ...testParams,
      [property]: undefined,
    };
    validate(new BaseEvent(newParams)).then((result) => {
      console.log(result[0]);
      expect(result[0].property).toContain(property);
    });
  });
});
