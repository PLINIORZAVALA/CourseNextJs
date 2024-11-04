import { comments } from "../data";

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    );

    if (!comment) {
        return new Response("Comment not found", { status: 404 });
    }

    return new Response(JSON.stringify(comment), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
