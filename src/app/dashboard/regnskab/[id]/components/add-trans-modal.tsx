'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import TransModalForm from './trans-modal-form';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  actMonFin: string | undefined;
  subcat: number | undefined;
  regnskabId: number;
};

export default function AddTransModal({
  open,
  setOpen,
  regnskabId,
  actMonFin,
  subcat,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tilføj ny transaktion</DialogTitle>
          <DialogDescription>
            Her kan du tilføje en ny transaktion. Klik på 'Opret', når du er
            færdig.
          </DialogDescription>
        </DialogHeader>
        <TransModalForm
          regnskabId={regnskabId}
          closeModal={() => setOpen(false)}
          actMonFin={actMonFin}
          subcat={subcat}
        />
      </DialogContent>
    </Dialog>
  );
}
