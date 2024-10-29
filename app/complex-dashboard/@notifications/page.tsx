import Card from "@/app/components/card";
import Link from "next/link"

export default function Notifications() {
    return (
        <Card>
            <div>Notificaciones</div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
    );
}
