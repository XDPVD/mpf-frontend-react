import { useEffect, useState } from "react";

const useDate = () => {
  const locale = "es";
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const full = today.toLocaleDateString(locale, options).toLocaleUpperCase();

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
  });

  return {
    full,
    time,
  };
};

export default useDate;
