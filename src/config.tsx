import { APP_URL } from "@/lib/host";
import { type Address } from "viem";
import { base, scroll } from "viem/chains";

// Project metadata
export const METADATA = {
  name: "ReFi DAO Holiday Lotto 🐸 ☃️",
  title: null,
  description: "Welcome to the ReFi DAO LottoPGF! Join the fun, fund the future.",
  url: APP_URL,
  icon: `${APP_URL}/images/icon.svg`,
  logo: `/images/ReFi DAO_Logo_Secondary.png`,
  bannerImage: "/images/ReFi DAO Holiday LottoPGF.png", 
  longDescription: (
    <p>
      This holiday season, we’re launching The ReFi DAO Holiday Lotto from Dec 18th - 24th!
      
      🌟 Kickstarted with $200 from Glo Dollar and ReFi DAO Global, the prize pool grows further with every ticket sold! 
      If no lucky numbers are drawn on Christmas Day, the winnings split evenly among ticket holders.
      
      🎟 Tickets are $10 USDGLO via Base Network (bridge or swap tokens <a href="https://jumper.exchange/">here</a>). 
      Each ticket fuels ReFi DAO & the ReFi Podcast.

      Curious about how it works? 
      Watch this short video <a href=" https://www.loom.com/share/ef9cfd46d18c46f59d55aa34514ac24b">here</a>.
      
      This is just the beginning—more exciting experiments coming in 2025! 🌱🎅 <b>Join the fun, fund the future.</b>
    </p>
  ),
};

// The metadata of the collective fund (default receiver of funds)
export const COLLECTIVE_FUND_METADATA = {
  name: "ReFi DAO Global",
  description: "Managed by the lottery organizer",
};

// The chain where your lottery contract is deployed
export const CHAIN = base;

// The ticker of the prize token. Will be used when rendering prizes.
export const PRIZE_TOKEN_TICKER = "USDGLO";
export const PRIZE_TOKEN_DECIMALS = 18;
// If true the user will pay with native tokens via the ETH adapter,
// otherwise they will pay with the ERC20 token directly
export const PRIZE_TOKEN_IS_NATIVE = false;

// The contract address of the lottery
export const CONTRACT_ADDRESS: Address =
  "0x4DBb93e8a435BBD1Ddb466b1EE6fa2DfC83CcCE3"; 

// The address of the ETH adapter contract
export const LOOTERY_ETH_ADAPTER_ADDRESS: Address =
  "0xF9aC611be31983EB9030d2F201Af566b59d5BCE2";

// The URL of the GraphQL API to get ticket data
export const GRAPHQL_API =
  "https://lootery-v1-indexer-base-prod.up.railway.app";

// The amount of money you're trying to raise.
// It will show a progress bar inside of the "funds raised" card.
// Set to null to disable the progress bar
export const FUNDRAISE_TARGET: bigint | null = null;

// Maps chain ids to the respective plaintext name
export const CHAIN_NAME_MAPPING = {
  [scroll.id]: "scroll",
  [base.id]: "base",
};
