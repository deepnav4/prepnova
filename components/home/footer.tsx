import Link from "next/link";
import { MousePointerClick } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mb-10 mx-2 md:mx-0 flex flex-col items-center">
      <div className="text-xs md:text-sm flex items-center gap-1 text-neutral-400">
        © 2026{" "}
        <Link
          href={"https://navdeep.site/"}
          target="_blank"
          className="text-neutral-400 hover:text-neutral-500 transition-colors duration-200 flex items-center gap-1"
        >
          Navdeep Singh
          <MousePointerClick className="size-4" />
        </Link>
      </div>
    </footer>
  );
}


