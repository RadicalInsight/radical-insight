import { BaseUser } from "./base-user";
import { validate } from "class-validator";

const testParams = {
  name: "jim",
  email: "jim@radical-insight.org",
  password: "iliketodance",
};

describe("BaseUser constructor", () => {
  it("passes validation for all properties", () => {
    validate(new BaseUser(testParams)).then((result) => {
      expect(result).toHaveLength(0);
    });
  });

  it.each(["name", "email", "password"])(
    "fails validation when missing required `%s` prop",
    (property) => {
      const newParams = {
        ...testParams,
        [property]: undefined,
      };
      validate(new BaseUser(newParams)).then((result) => {
        expect(result[0].property).toBe(property);
      });
    }
  );
});
