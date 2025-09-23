import type { Metadata } from "next";
import DataProvider from "./data-provider";
import "./globals.css";
import { FaGithub } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Formulário",
  description: "Formulário de cadastro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="flex flex-col items-center justify-center py-6 px-4 md:max-w-4xl md:py-11 md:px-32 ">
          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-2xl font-semibold">Formulário</h1>
            <a
              className="text-3xl hover:text-gray-600"
              target="_blank"
              href="https://github.com/DuartDouglas"
            >
              <FaGithub />
            </a>
          </div>
          <DataProvider>{children}</DataProvider>
          <div className="text-center">
            <h3 className="font-semibold text-lg">
              Informações sobre o projeto
            </h3>
            <p>
              Acesse minha página no GitHub e veja esse e outros projetos
              desenvolvidos
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
