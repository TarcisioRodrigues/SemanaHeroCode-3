import { useRef } from 'react';
import {ButtonBase} from './button';
import { Input } from './input';

export const JoinRoom=()=> {
  const name = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input placeholder="Seu nome" type="text" ref={name} />
      <Input placeholder="ID da reunião" type="text" ref={id} />

      <ButtonBase title="Entrar" type="button" />
    </>
  );
}