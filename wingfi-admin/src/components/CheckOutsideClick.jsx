import { useEffect, useRef } from "react";

function CheckOutsideClick(props) {
  const ref = useRef(null);
  const { onClickOutside, children } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (onClickOutside) onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!children) {
    return null;
  }

  return <div ref={ref}>{children}</div>;
}

export default CheckOutsideClick;
