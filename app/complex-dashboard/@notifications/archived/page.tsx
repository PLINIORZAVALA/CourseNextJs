import Card from "@/app/components/card";
import Link from "next/link"

export default function ArchivedNotifications() {
    return (
        <Card>
            <div>Archived Notificaciones</div>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    );
}
