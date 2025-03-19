import { useQueryState, parseAsBoolean } from "nuqs";
import { useCallback } from "react";

export const useCreateOrganization = () => {
  const [isOpen, setIsOpen] = useQueryState(
    "new-org",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true }),
  );

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  return {
    isOpen,
    open,
    close,
    setIsOpen,
  };
};
