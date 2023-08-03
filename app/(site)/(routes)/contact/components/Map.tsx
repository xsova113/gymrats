"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 49.166592,
      lng: -123.133568,
    },
    zoom: 11,
  };

  const center = useMemo(() => ({ lat: 49.166592, lng: -123.133568 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY as string,
  });

  return (
    <div className="flex-1 flex flex-col">
      <h1 className="text-2xl mb-10">Location</h1>
      <h3 className="mb-4">
        123 Anywhere Ave. <br />
        Richmond, XD 123abc
      </h3>
      {!isLoaded ? (
        <div className="space-y-8 mt-16">
          <Skeleton className="w-full h-[20px] rounded-full" />
          <Skeleton className="w-[80%] h-[20px] rounded-full" />
          <Skeleton className="w-[50%] h-[20px] rounded-full" />
          <Skeleton className="w-[25%] h-[20px] rounded-full" />
        </div>
      ) : (
        <GoogleMap
          mapContainerClassName="h-full w-full"
          center={center}
          zoom={13}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
