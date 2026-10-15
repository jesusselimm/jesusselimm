"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Europe/Istanbul",
});

/** Izmir local time (Turkey has a single zone, IANA id Europe/Istanbul); renders the city only until mounted to avoid hydration mismatch. */
export function LiveTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span>
      Izmir{time ? ` · ${time}` : ""}
    </span>
  );
}
