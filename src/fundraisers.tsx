import { PRIZE_TOKEN_DECIMALS } from "@/config";
import type { ReactNode } from "react";
import { parseUnits, type Address } from "viem";

interface Fundraiser {
  title: string;
  address: Address;
  description?: ReactNode;
  targetAmount?: bigint;
}

// List of fundraisers that will be shown on the homepage.
// Each beneficiary address needs to be whitelisted on the lottery contract
// with the `setBeneficiary` function, otherwise the transactions will fail.
// If you don't want to show any fundraisers, set this to an empty array.

export const FUNDRAISERS: Fundraiser[] = [
  {
    title: "ReFi Podcast",
    description: "Support Maya & Tereza's work on the incredible Season 4 🎙️",
    /* targetAmount: parseUnits("0.42069", PRIZE_TOKEN_DECIMALS), */
    address: "0x7aa8Da47f4f67C4703eB2f944273Ad3d91e51a9F",
  
  },
];
