import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #131313;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #ddd;
  background-image: url(https://images.unsplash.com/photo-1623602406812-10cbd27715b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80);
  object-fit: cover;
`;

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

function UpperBanner() {
  const date = useDate();
  return (
    <Wrapper>
      <Typography variant="subtitle2">{date.full}</Typography>
      <Typography variant="h4">{date.time}</Typography>
    </Wrapper>
  );
}

export default UpperBanner;
