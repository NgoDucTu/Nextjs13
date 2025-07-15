import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/facebook"}>Facebook</Link>
        </li>
        <li>
          <Link href={"/zalo"}>Zalo</Link>
        </li>
      </ul>
    </div>
  );
}
