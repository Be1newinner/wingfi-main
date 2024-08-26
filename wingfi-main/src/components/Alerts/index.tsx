import { IoMdCloseCircleOutline } from "react-icons/io";

interface propType {
  type: "success" | "error" | "warning" | "info";
  text: string | null;
  onClick: () => void;
}

export function StyledAlert({ type, text, onClick }: propType) {
  let alertType;

  switch (type) {
    case "info":
      alertType = "alert-info";
      break;
    case "success":
      alertType = "alert-success";
      break;
    case "warning":
      alertType = "alert-warning";
      break;
    default:
      alertType = "alert-error";
  }

  return text ? (
    <div
      role="alert"
      className={`alert ${alertType} max-w-max rounded min-w-96 flex items-center fixed bottom-4 left-4`}
      style={{
        border: "2px solid rgba(0,0,0,0.15)",
        boxShadow:"0 0 5px 0px rgba(0,0,0,0.15)"
      }}
    >
      <IoMdCloseCircleOutline
        size={26}
        onClick={onClick}
        style={{
          cursor: "pointer",
        }}
      />

      <span>
        {type.split("").map((e, i) => (i === 0 ? e.toUpperCase() : e))}! {text}
      </span>
    </div>
  ) : null;
}
