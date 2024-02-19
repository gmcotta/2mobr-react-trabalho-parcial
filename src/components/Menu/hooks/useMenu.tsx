import { useState } from "react";

export function useMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuActive = () => {
    const newValue = !isActive;
    setIsActive(newValue);
  };

  const handleMenuLinkClick = () => {
    setIsActive(false);
  };

  return {
    isActive,
    handleMenuActive,
    handleMenuLinkClick,
  };
}
