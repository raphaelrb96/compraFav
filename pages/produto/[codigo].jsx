import { getProduto } from "../../fetchData/getProduto";

export const getServerSideProps = async ({ params }) => {
    const { codigo } = params
    const produto = await getProduto(codigo)
    if (!produto) {
      return { notFound: true }
    }
    return { props: { data: { codigo, produto } } }
  }