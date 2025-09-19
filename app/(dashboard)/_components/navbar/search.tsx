"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import qs from "query-string";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
export default function Search() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounceValue(value, 500);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const url = qs.stringifyUrl({
      url: "/",
      query: {
        search: debouncedValue,
      },
    });
    router.push(url);
  }, [debouncedValue, router]);
  return (
    <>
      <div className="relative">
        <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
        <Input
          type="text"
          placeholder="search"
          className="w-[400px] pl-10 border-b-emerald-500 focus:outline-none focus-visible:ring-0 focus-visible:outline-none"
          onChange={handleChange}
          value={value}
        />
      </div>
    </>
  );
}
