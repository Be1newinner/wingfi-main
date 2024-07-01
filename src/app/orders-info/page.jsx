import { Tab_OrdersInfo, AccountStructure } from "@/registry/components";

export default function OrdersInfo() {
  return (
    <AccountStructure pageName="My Orders" btnName="Edit Profile">
      <Tab_OrdersInfo />
    </AccountStructure>
  );
}
