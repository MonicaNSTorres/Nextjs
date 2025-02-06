
import Link from "next/link";

const notFoundPage = () => {
  return (
    <div>
        <h1>Todo não encontrado</h1>
        <Link href="./">Voltar para a home</Link>
    </div>
  )
}

export default notFoundPage;