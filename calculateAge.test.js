const { calculateAge } = require("./calculateAge");

test("Életkor 2019-ben, 1988-as születéssel", () => {
    expect(calculateAge(2019, 1988)).toBe(31);
});

test("Életkor 2021-ben, 1986-os születéssel", () => {
    expect(calculateAge(2021, 1986)).toBe(35);
});

test("Életkor 2000-ben, 2022-es születéssel", () => {
    expect(calculateAge(2000, 2022)).toBe(0);
});
