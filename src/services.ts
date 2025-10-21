import { toZonedTime } from "date-fns-tz";
import { addDays } from "./helpers";
import { TIMEZONE } from "./constants";

export async function saveDailyBalances() {
  const res = await fetch(`${process.env.API_URL}/api/cron/dailyBalances`, {
    method: "POST",
  });
  const data = await res.json();
}

export async function generateInventoryReport() {
  const now = toZonedTime(new Date(), TIMEZONE);
  const prevDate = addDays(now, -1);
  prevDate.setHours(0, 0, 0, 0);
  const res = await fetch(`${process.env.API_URL}/api/cron/inventoryReports`, {
    method: "POST",
    body: JSON.stringify({
      date: prevDate.toISOString(),
    }),
  });
  const data = await res.json();
}
