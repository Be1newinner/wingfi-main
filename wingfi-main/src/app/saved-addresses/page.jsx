"use client";

import { AccountStructure } from "@/registry/components";
import SavedAddresses from "./SavedAddresses";

export default function SavedAddressesPage() {
  return (
    <AccountStructure pageName="My Saved Addresses" state={3}>
      <div className="flex gap-4">
        <div className="bg-white shadow rounded-sm border py-6 px-10 flex flex-col gap-4 w-full divide-y">
          <SavedAddresses />
        </div>
      </div>
    </AccountStructure>
  );
}
