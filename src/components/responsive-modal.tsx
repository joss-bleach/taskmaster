"use client";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface ResponsiveModalProps {
  children: React.ReactNode;
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({
  children,
  title,
  open,
  onOpenChange,
}: ResponsiveModalProps) => {
  const isMobile = useIsMobile();

  switch (isMobile) {
    case true:
      return (
        <Drawer open={open} onOpenChange={onOpenChange}>
          <DrawerHeader className="sr-only">
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          <DrawerContent>
            <div className="p-6">{children}</div>
          </DrawerContent>
        </Drawer>
      );
    case false:
      return (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogHeader>
            <DialogTitle className="sr-only">{title}</DialogTitle>
          </DialogHeader>
          <DialogContent className="bg-background border-border border shadow-none">
            {children}
          </DialogContent>
        </Dialog>
      );
  }
};
