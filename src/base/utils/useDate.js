import { useMemo } from "react";
import { useEffect, useState } from "react";

const useDate = () => {
  const locale = "es";

  const todayObject = useMemo(() => (new Date()) , [])

  const [today, setDate] = useState(todayObject); // Save the current date to be able to trigger an update
  
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

  const date = today.toLocaleDateString(locale, options).toLocaleUpperCase();

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
  });

  return [today, {date, time}];
};

export default useDate;
