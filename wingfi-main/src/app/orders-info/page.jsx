'use-client'
import { Tab_OrdersInfo, AccountStructure } from "@/components";

export default function OrdersInfo() {
  return (
    <AccountStructure pageName="My Orders" btnName="Edit Profile">
      <Tab_OrdersInfo />
    </AccountStructure>
  );
}
