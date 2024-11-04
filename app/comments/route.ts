import { comments } from "./data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(request: Request) {
        const commet = await request.json()

        const newcommet = {
            id : comments.length + 1,
            text: commet.text
        };
        comments.push(newcommet)
    return new Response(JSON.stringify(newcommet),{
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    });
}