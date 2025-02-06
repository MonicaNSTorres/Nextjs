"use server";

import db from "./db";
import { redirect } from 'next/navigation';

//deletar dados -> utiliza formData pq trabalhamos com form
async function deleteTodo(formData) {
    "use server"

    const id = Number(formData.get("id"))

    await db.todo.delete({
        where: { id }
    })

    if(!todo){
        throw new Error(`Todo com id ${id} não existe`)
    }

    redirect('/');
}

 export const addTodo = async (formData) => {

    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");
    const status = 'pendente';

    // Validações

    const todo = await db.todo.create({
        data: {
            titulo,
            descricao,
            status
        }
    })
    redirect('./');
}


export default deleteTodo;