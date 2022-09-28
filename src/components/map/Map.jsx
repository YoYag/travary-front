import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 37.487935,
      lng: 126.857758,
    },
    zoom: 10,
  };

  return (
    <div className="wh-1024px75vh">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDk08atzQPD_VqTY3jCCdQB6LrBm0B2isY",
          language: "ko",
          libraries: "places",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}

        // map, maps 개체에 접근하기 위해 반드시 true로 설정해줘야 함
        yesIWantToUseGoogleMapApiInternals
        // map은 지도 객체, maps에는 api object가 들어있음
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      />
    </div>
  );
};

export default Map;
