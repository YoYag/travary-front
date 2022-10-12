import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = ({ setApiReady, setMapData, setMapApiData, places }) => {
  // 지도 api_key
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  // 기본 지도 세팅값
  const defaultProps = {
    center: {
      lat: 37.487935,
      lng: 126.857758,
    },
    zoom: 10,
  };

  // 검색기능(장소정보 api)
  const handleApiLoaded = (map, maps) => {
    // map과 maps 개체가 로드됐다면, 각각의 state값에 넣어준다.
    if (map && maps) {
      setApiReady(true);
      setMapData(map);
      setMapApiData(maps);
      console.log("Api 로딩 성공");
    } else {
      console.log("Api 로딩 실패");
    }
  };

  // 구글 정보창
  // const google = window.google;
  // const infoWindow = new google.maps.InfoWindow({
  //   content: "",
  //   disableAutoPan: true,
  // });

  // Create an array of alphabetical characters used to label the markers.
  // const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="h-75vh w-full">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
          language: "ko",
          libraries: "places",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // map, maps 개체에 접근하기 위해 반드시 true로 설정해줘야 함
        yesIWantToUseGoogleMapApiInternals
        // map은 지도 객체, maps에는 api object가 들어있음
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {places.length !== 0 &&
          places.map((place) => (
            <Marker
              key={place.place_id}
              text={place.name}
              lat={place.geometry.location.lat()}
              lng={place.geometry.location.lng()}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
