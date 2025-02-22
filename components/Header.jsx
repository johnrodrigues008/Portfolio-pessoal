"use client";

import { Link } from "lucide-react";

export function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-black w-full fixed top-0 z-10 left-0">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav className="flex gap-4">
                <Link href="#" className="text-base">Home</Link>
                <Link href="#" className="text-base">About</Link>
                <Link href="#" className="text-base">Projects</Link>
                <Link href="#" className="text-base">Contact</Link>
            </nav>
        </header>
    );
};