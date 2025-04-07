import { Link } from "@/i18n/navigation";
import Image from "next/image";

export function CompanyBrand() {
  return (
    <Link
      href="/"
      title="Strona Główna"
      className="flex gap-2 items-end hover:scale-104 active:scale-96 transition-transform w-fit"
    >
      <div className="h-16 w-12 relative">
        <Image
          src="/images/logo.png"
          alt="Logo BioFloor"
          className="object-contain"
          fill
        />
      </div>
      <div className="h-10 w-32 sm:w-52 relative">
        <Image
          src="/images/logo-text.png"
          alt="Text Logo BioFloor"
          className="object-contain"
          fill
        />
      </div>
    </Link>
  );
}
