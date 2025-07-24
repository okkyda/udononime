"use client";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const InputSearch = () => {
    return (
        <div>

            <input
            placeholder="Cari Anime Kamu.."
            className="bg-blue-50 rounded px-2 py-1 text-sm outline-none"
            style={{ maxWidth: 180 }}
        />

        <button><MagnifyingGlassIcon size={20} /></button>

        </div>
    )
}

export default InputSearch;