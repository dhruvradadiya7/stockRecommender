import useRecommendation from "./utils/useRecommendation";
import { dataGenerator } from "./utils/dataGenerator";
test("passing invalid data to hook", () => {
  expect(useRecommendation()).toBe(null);
});

const stockData =[{ date: "Fri Aug 12 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '120.69', socialMediaCount: [129, 123,54,43]},
{date: "Thu Aug 11 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '911.90', socialMediaCount: [129, 123,54,43]},
{date: "Wed Aug 10 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '67.82', socialMediaCount: [129, 123,54,43]},
 {date: "Tue Aug 09 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '925.63', socialMediaCount: [129, 123,54,43]}, 
 {date: "Mon Aug 08 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '124.28', socialMediaCount: [129, 123,54,43]},
 {date: "Sun Aug 07 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '750.42', socialMediaCount: [129, 123,54,43]},
 {date: "Sat Aug 06 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '709.50', socialMediaCount: [129, 123,54,43]},
 {date: "Fri Aug 05 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '647.08', socialMediaCount: [129, 123,54,43]},
{date: "Thu Aug 04 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '567.79', socialMediaCount: [129, 123,54,43]},
 {date: "Wed Aug 03 2022 13:22:22 GMT-0400 (Eastern Daylight Time)", price: '143.04', socialMediaCount: [129, 123,54,43]}]

test("passing valid data to the hook", () => {
  expect(useRecommendation(stockData)[0].action).toEqual("Buy") 
});
