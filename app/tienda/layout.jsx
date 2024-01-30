import Link from "next/link"

export const metadata = {
    title: "Tienda oficial",
}

export default function TiendaLayout({children}) {
    return (
        <>
        <nav>
            <h3>Seccion Tienda</h3>

            <ul>
                <li>
                    <Link href="/tienda/categories">Categories</Link>
                </li>
                <li>
                    <Link href="/tienda/categories/laptop">Laptop</Link>
                </li>
            </ul>
        </nav>
        {children}
        </>
    )
}