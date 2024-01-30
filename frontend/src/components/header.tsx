import Image from "next/image";
import { Container } from "./container";

export const Header = () => {
  return (
    
      <div className=" bg-gray-1000 p-4">
        <Container>
          <div className="flex justify-between">
            <Image src="/logo.svg" alt="talk to me?" width={120} height={120} />
            <Image
              src="/heroIcon.svg"
              alt="talk to me?"
              width={60}
              height={60}
            />
          </div>
        </Container>
      </div>
  );
};
