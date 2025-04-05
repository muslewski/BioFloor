import Image from "next/image";

export function CompanyBrand() {
  return (
    <div className="flex gap-2 items-end">
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
    </div>
  );
}
