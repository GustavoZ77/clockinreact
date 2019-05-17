import {SpCountDownTimer} from './SpCountDownTimer';

test("testing CountDownTimer with date in format [month] [day], [year]", () =>{
  expect(SpCountDownTimer("Jan 2, 2020").days).toBeGreaterThan(3);
});

test("testing CountDownTimer with invalid date", () =>{
  expect(() => {
    SpCountDownTimer("Jan 2, 2010")
    }).toThrow();
})

test("testing CountDownTimer with invalid date format", () =>{
  expect(() => {
    SpCountDownTimer("djfhsd")
    }).toThrow();
})
