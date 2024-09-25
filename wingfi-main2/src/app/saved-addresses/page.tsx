import { AccountStructure } from "@/components";
import { SavedAddresses } from "./SavedAddresses";

export default function SavedAddressesPage() {
  return (
    <AccountStructure pageName="My Saved Addresses" state={3}>
      <div className="flex gap-4 p-2 sm:p-0">
        <div className="bg-white shadow rounded-sm border p-4 sm:py-6 sm:px-10 flex flex-col gap-4 w-full divide-y">
          <SavedAddresses />
        </div>
      </div>
    </AccountStructure>
  );
}
