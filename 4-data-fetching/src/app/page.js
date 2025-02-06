import Link from "next/link";
import db from "../db";
import Button from "./components/button/button";
import {deleteTodo} from "../actions";

export default async function Home() {
  //retornando os dados do banco de dados
  const todos = await db.todo.findMany();

  //deletar dados -> utiliza formData pq trabalhamos com form
  {/*async function deleteTodo(formData) {
    "use server"

    const id = Number(formData.get("id"))

    await db.todo.delete({
      where: { id }
    })

    redirect('/');
  }*/}

  return (
    <main className="container mx-auto p-4">
      <Link href="./todos/create" className='text-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-8 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Ir para a criação de Todo</Link>

      <h1 className="text-2x1 font-bold mb-6 mt-6">Todos!</h1>
      <div className="space-y-4">
        {todos.map((todo) =>
          <div key={todo.id} className="bg-gray-500 rounded-lg shadow p-4">

            <div className="flex justify-between items-start">
              <div>
                <h2 className="title text-left text-xl font-semibold">{todo.titulo}</h2>
                <p className="text-left">{todo.descricao}</p>
              </div>
              <div className="flex space-x-2 mt-3">
                <Link href={`/todos/${todo.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visiualizar</Link>
                <Link href="/" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Editar</Link>

                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    <Button>Excluir</Button>
                  </div>
                </form>

              </div>

            </div>

          </div>
        )}
      </div>
    </main>
  );
}
