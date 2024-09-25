import WishlistContainer from "./WishlistContainer";
import { AccountStructure } from "@/components";

export default function Cart() {
  return (
    <AccountStructure pageName="My Wishlist" state={1}>
      <WishlistContainer />
    </AccountStructure>
  );
}
