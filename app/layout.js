import './globals.css'

export const metadata = {
  title: 'Calculadora de Inversiones',
  description: 'Calculadora de inversiones con interés compuesto ajustada por inflación',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}