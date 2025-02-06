import Link from 'next/link';
import {addTodo} from '../../../actions';


const TodoPage = () => {
  {/*const addTodo = async (formData) => {
    "use server";

    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");
    const status = 'pendente';

    console.log(titulo, descricao, status);

    // Validações

    const todo = await db.todo.create({
      data: {
        titulo,
        descricao,
        status
      }
    })

    redirect('./');

  }*/}


  return (
    <div className='max-w-md mx-auto mt-10'>
      <Link className='' href="../">Listagem de dados</Link>
      <h1 className='text-2x1 font-bold text-center mb-6'>Criar tarefa</h1>
      <form action={addTodo} className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg'>
        <label className='block text-sm font-medium text-gray-700'> Titulo
          <input
            type='text'
            id='titulo'
            name='titulo'
            placeholder='insira um titulo'
            required
            className='mt-1 px-4 border border-gray-300 rounded-md w-full'
          />
        </label>

        <label className='block text-sm font-medium text-gray-700'> Descrição
          <textarea
            type='text'
            id='descricao'
            name='descricao'
            placeholder='insira uma descricao'
            required
            className='mt-1 px-4 border border-gray-300 rounded-md w-full h-32'
          />
        </label>

        <button type='submit' className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Criar TODO</button>
      </form>

    </div>
  )
}

export default TodoPage;