/* eslint-disable @next/next/no-img-element */
'use client';

import Image from "next/image";
import Link from "next/link";
import './logo.css'

export default function Logo() {
    return (
        <div>
            <Link href="/" className="cursor-pointer">
                <img src="/images/logo.png" alt="logo" className="logo h-[65px]" />
            </Link>
        </div>
    );
}