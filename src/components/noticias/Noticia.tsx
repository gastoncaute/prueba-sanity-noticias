import React from "react";
import { client } from "@/utils/configSanity";

interface INoticia {
  _id: string;
  bajada: string;
  descripcion: string;
  title: string;
  _createdAt: string;
  categoria: string;
}

async function getData() {
  const query = `*[_type == 'noticias']`;
  const data = await client.fetch(query);
  return data as INoticia[];
}

const Noticia = async () => {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <h1>Noticia</h1>
      <div>
        {data.map((item) => (
          <div key={item._id}>
            <h1>
              <span>{item.title}</span>
            </h1>
            <h2>{item.bajada}</h2>
            <h3>{item.categoria}</h3>
            <h4>{item._createdAt}</h4>
            <h5>{item.descripcion}</h5>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Noticia;
