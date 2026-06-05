import { CronJob } from "cron";
import dotenv from "dotenv";
import { saveDailyBalances, updatePublicHolidays } from "./services";
import { TIMEZONE } from "./constants";

dotenv.config();

CronJob.from({
  cronTime: "0 0 1 * * *",
  onTick: saveDailyBalances,
  start: true,
  timeZone: TIMEZONE,
});

CronJob.from({
  cronTime: "0 30 1 28 * *", // at 01:30 AM, on day 28 of the month
  onTick: updatePublicHolidays,
  start: true,
  timeZone: TIMEZONE,
});
