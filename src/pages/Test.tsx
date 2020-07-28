import React, { useRef, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Chart from 'react-google-charts';
import { Link } from "react-router-dom";
import styled from "styled-components";
import mapRegions from '../mapRegions';

const Test: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Line 19 will return 0
    console.log(wrapperRef!.current!.offsetWidth);
    setTimeout(() => {
      // line 22 will return correct width
      console.log(wrapperRef!.current!.offsetWidth);
    }, 900);
  }, [wrapperRef]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Link to="/home">Home</Link>
        <Wrapper ref={wrapperRef}>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Test Page</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="GeoChart"
            data={mapRegions}
            options={{
              colorAxis: { colors: ['#ccc', 'orange'] },
              legend: "none",
            }}
            mapsApiKey="-KL-6s"
          />
        </Wrapper>
      </IonContent>
    </IonPage>
  );
};

export default Test;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
