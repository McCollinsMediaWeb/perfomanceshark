// export const handleConversionEvent = () => {
//   window.gtag("event", "conversion", {
//     send_to: "AW-16544595887/-2kICMKWq6oZEK__idE9",
//     value: 1.0,
//     currency: "USD",
//   });
// };


export const handleConversionEvent = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-16544595887/-2kICMKWq6oZEK__idE9",
      value: 1.0,
      currency: "USD",
    });
  } else {
    console.warn("gtag not loaded yet");
  }
};
