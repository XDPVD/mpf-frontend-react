import { useMemo } from "react";
import { useEffect, useState } from "react";
//llentesque vehicula interdum lectus, ut accumsan eros fringilla at. Ut fringilla eros vitae leo consect
const useDate = () => {
  const locale = "es";

  const todayObject = useMemo(() => (new Date()) , [])

  const [today, setDate] = useState(todayObject); // Save the current date to be able to trigger an update
  
  //llentesque vehicula interdum lectus, ut accumsan eros fringilla at. Ut fringilla eros vitae leo consect
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

  //llentesque vehicula interdum lectus, ut accumsan eros fringilla at. Ut fringilla eros vitae leo consect
  const date = today.toLocaleDateString(locale, options).toLocaleUpperCase();

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
  });

  return [today, {date, time}];
};

//non lacus. Praesent non sem volutpat nibh ultricies tincidunt quis a purus. Ut dapibus mi ut vul
export default useDate;
