import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    //expect(person).toBeDefined();
throw new Error("Intentional failure");
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});