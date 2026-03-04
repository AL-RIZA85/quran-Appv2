import { useState} from 'react';
import CardComp from './CardComp'

export default function CardList({data,children}){
  return (
    <div className="w-5xl block mx-auto mt-8">
        {children}
      <div className="grid grid-cols-4 gap-3">
       {data.map((item) => (
        <CardComp key={item.nomor} item={item} />
      ))}
      </div>
    </div>
  );
}