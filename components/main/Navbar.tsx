"use client";
import Logo from "@/components/sub/Logo";
import NavMenu from "@/components/sub/NavMenu";
import SearchBox from "@/components/sub/SearchBox";
import SelectLanguage from "@/components/sub/SelectLanguage";

export default function Navbar() {
  return (
    <div className="mx-auto flex max-w-[1000px] items-center justify-between p-4">
      <div className="flex w-[400px] items-center justify-between">
        <Logo />
        <NavMenu />
      </div>
      <div className="flex w-[350px] items-center justify-between">
        <SelectLanguage />
        <SearchBox />
      </div>
    </div>
  );
}
