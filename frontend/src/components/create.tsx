import { useRef } from 'react';
import {ButtonBase} from './button';
import { Input } from './input';

export const CreateRoom=()=> {
  const name = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input placeholder="Seu nome" type="text" ref={name} />

      <ButtonBase title="Entrar" type="button" />
    </>
  );
}