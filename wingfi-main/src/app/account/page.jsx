import { AccountStructure } from "@/registry/components";
import ProfileDetails from "./ProfileDetails";

export default function Account() {
  return (
    <AccountStructure pageName="My Profile" state={2}>
      <div className="flex gap-4">
        <ProfileDetails />
      </div>
    </AccountStructure>
  );
}
