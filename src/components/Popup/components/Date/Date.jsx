import { useState } from "react";

export default function DateComponent() {
  const [date] = useState(new Date());
  const formattedDate = date.toLocaleDateString("en", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return <p className="popup__date">{formattedDate}</p>;
}
