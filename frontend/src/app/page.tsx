import { ButtonBase } from "@/components/button";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { InputBase } from "@/components/input";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1    mx-auto   flex-col  w-full h-full items-center justify-center">
        <Container>
          <div className="bg-secondary  p-4  max-w-[580px] w-full rounded-lg">

          
          <div className="flex">
            <span>Ingressar</span>
            <span>Nova reunião</span>
          </div>
          <div className="space-y-4">
            <InputBase placeholder="Digite o codigo da reunião" type="text" />
            <InputBase placeholder="Digite o codigo da reunião" type="text" />
            <ButtonBase title="Entrar" type="submit"/>
          </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
