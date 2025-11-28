import { CronJob } from "cron";
import dotenv from "dotenv";
import { saveDailyBalances } from "./services";
import { TIMEZONE } from "./constants";

dotenv.config();

CronJob.from({
  cronTime: "0 0 1 * * *",
  onTick: saveDailyBalances,
  start: true,
  timeZone: TIMEZONE,
});
