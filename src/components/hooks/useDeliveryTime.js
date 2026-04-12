import { useEffect, useState } from "react";

export default function useDeliveryTime() {
  const [estimate, setEstimate] = useState("30–45 min");

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(() => {
      // fake smart estimate
      const time = Math.floor(Math.random() * 15) + 20;
      setEstimate(`${time}-${time + 10} min`);
    });
  }, []);

  return estimate;
}