import { CronJob } from "cron";
import dotenv from "dotenv";
import { generateInventoryReport, saveDailyBalances } from "./services";
import { TIMEZONE } from "./constants";

dotenv.config();

CronJob.from({
  cronTime: "0 0 1 * * *",
  onTick: saveDailyBalances,
  start: true,
  timeZone: TIMEZONE,
});

CronJob.from({
  cronTime: "0 0 2 * * *",
  onTick: generateInventoryReport,
  start: true,
  timeZone: TIMEZONE,
});
