import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 text-foreground">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold">Página no encontrada</h1>
        <p className="mt-3 text-sm text-muted">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-brand px-4 py-2 text-sm font-medium text-brandForeground"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
