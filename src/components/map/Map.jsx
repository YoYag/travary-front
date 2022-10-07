import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = ({ setApiReady, setMapData, setMapApiData, setPlace }) => {
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

  const contacts = [
    { name: "Spiderman", lat: 37.488, lng: 126.858 },
    { name: "Iron Man", lat: 37.62, lng: 126.859 },
    { name: "Hulk", lat: 37.489, lng: 126.758 },
  ];

  // 검색기능 구현중(장소정보 api)
  const handleApiLoaded = (map, maps) => {
    // map과 maps 개체가 로드됐다면, 각각의 state값에 넣어준다.
    if (map && maps) {
      setApiReady(true);
      // console.log("map : ", map);
      // console.log("maps : ", maps);
      setMapData(map);
      setMapApiData(maps);
    } else {
      console.log("Api 로딩 실패");
    }
  };

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
        // margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}

        // map, maps 개체에 접근하기 위해 반드시 true로 설정해줘야 함
        yesIWantToUseGoogleMapApiInternals
        // map은 지도 객체, maps에는 api object가 들어있음
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {contacts.map((contact, i) => (
          <Marker
            lat={contact.lat}
            lng={contact.lng}
            text={contact.name}
            key={i}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
