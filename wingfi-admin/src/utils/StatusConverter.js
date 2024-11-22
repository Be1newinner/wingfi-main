import { STATUS } from "../constants/types";

export default function StatusConverter(status) {
  switch (status) {
    case 0:
      return STATUS.PENDING;
    case 1:
      return STATUS.ACCEPTED;
    case 2:
      return STATUS.OUT_FOR_DELIVERY;
    case 3:
      return STATUS.DELIVERED;
    case 9:
      return STATUS.FAILED;
    default:
      return "OTHER";
  }
}
