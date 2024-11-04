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

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const { text } = body;

    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );

    if (index === -1) {
        return new Response("Comment not found", { status: 404 });
    }

    comments[index].text = text;

    return new Response(JSON.stringify(comments[index]), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
