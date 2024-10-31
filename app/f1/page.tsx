import Link from "next/link";

export default function F1() {
    return (
        <div>
            <h1>F1 page</h1>
            <div>
                <Link href="/f1/f2">Go to F2 (will redirect)</Link>
            </div>
        </div>
    );
}
