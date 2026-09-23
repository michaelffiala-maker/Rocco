"use client";

import { useEffect, useRef } from "react";

export default function ItalyTripCards() {
  const youliEpicureanRef = useRef<HTMLDivElement>(null);
  const youliFlagshipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!youliEpicureanRef.current) return;
    const script = document.createElement("script");
    script.src =
      "https://youli.io/embeds/script/trips/chef-rocco-garibaldi-culinary-experience/?view=card&tripid=116be61d-7f9a-f111-9b33-000d3aff9d5c&style=detailed";
    script.async = true;
    youliEpicureanRef.current.appendChild(script);
  }, []);

  useEffect(() => {
    if (!youliFlagshipRef.current) return;
    const script = document.createElement("script");
    script.src =
      "https://youli.io/embeds/script/trips/chef-rocco-garibaldi-culinary-experience/?view=card&tripid=e28f8a28-0672-f011-8dc8-002248c0776b&style=detailed";
    script.async = true;
    youliFlagshipRef.current.appendChild(script);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div ref={youliEpicureanRef} />
      <div ref={youliFlagshipRef} />
    </div>
  );
}
