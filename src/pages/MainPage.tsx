import React, { useEffect, useState } from 'react';
import fetcher from '../components/Fetcher';
import MediaCard from '../components/card';
import { Character } from '../interfaces/CardIfc';

export default function MainPage() {
  const [data, setData] = useState<Character[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getData = async () => {
    try {
      const response = await fetcher('https://api.sampleapis.com/futurama/characters', 'get', null, null);
      console.log(response);
      setData(response);
    } catch (err: any) {
      console.log(err);
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((element: Character) => (
        <MediaCard
          key={element.id}
          imgSrc={element.images.main}
          imgAlt={element.name.first}
          title={`${element.name.first} ${element.name.middle} ${element.name.last}`}
          description={element.homePlanet}
        />
      ))}
    </>
  );
}
