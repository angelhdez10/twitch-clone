"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";

const Search = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchInput) return;
    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: searchInput },
      },
      { skipEmptyString: true },
    );
    router.push(url);
  };
  console.log(searchInput);
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center w-full lg:w-[400px]"
    >
      <Input
        className="rounded-r-none focus:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        placeholder="Search"
        name="searchasdfas"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchInput && (
        <X
          onClick={() => setSearchInput("")}
          className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
        />
      )}
      <Button
        type="submit"
        size={"sm"}
        variant={"secondary"}
        className="rounded-l-none"
        disabled={!searchInput?.length}
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
