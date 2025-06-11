import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-gradient-to-r from-[#013eff] via-[#5c9bbe] to-[#0e9c35]">
      <nav className="flex h-20 items-center justify-between px-4 ">
        <div className="flex grow items-center gap-4">
          <div></div>
          <Image
            src="/static/icons/brasaouepa1.png"
            alt="Logo Uepa"
            height={65}
            width={65}
          />
        </div>
      </nav>
    </header>
  );
}
