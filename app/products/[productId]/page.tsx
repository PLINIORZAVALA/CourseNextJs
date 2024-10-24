export default function ProductId({params}: {
    params : {productId: string};
}) {
    return <h1> Detail to page Ids! {params.productId}</h1>;
}