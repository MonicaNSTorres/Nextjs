import db from "../../../db";
import { notFound } from "next/navigation";

const show = async ({ params }) => {
    await new Promise ((a) => setTimeout(a, 2000));

    const id = Number(params?.id); //preciso transformar o ID em number pq ele acusa como valor invalido
    const titulo = params?.titulo;
    const descricao = params?.descricao;

    const todo = await db.todo.findFirst({
        where: { id: id }
    });

    if(!todo) return notFound();

    console.log(id);

    return (
        <div className="text-center">
            <h1 className="text-white font-semibold">Todo: {todo.id}</h1>
            <h2>Titulo: {todo.titulo}</h2>
            <p>Descrição: {todo.descricao}</p>
        </div>
    )
}

export default show;