export async function saveDailyBalances() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/cron/dailyBalances`, {
      method: "POST",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updatePublicHolidays() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/cron/publicHolidays`, {
      method: "POST",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
